import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as firebase from 'firebase';
import UserTotal from '../components/UserTotal';

interface IDashboardPageRouterProps {
    uid: string
}

interface IDashboardPageProps extends RouteComponentProps<IDashboardPageRouterProps>{

}

interface ITransactions {
    category: string,
    amount: number
}

interface IDashboardPageState {
    showAddTransactionInput: boolean,
    user: {
        id: string,
        total?: number,
        transactions?: ITransactions
    }
}

class DashboardPage extends React.Component<IDashboardPageProps, IDashboardPageState> {

    private userAccount: firebase.database.Reference

    public constructor(props: IDashboardPageProps) {
        super(props);
        this.state = {
            showAddTransactionInput: false,
            user: {
                id: "",
            }
        }
        this.handleSignOut = this.handleSignOut.bind(this)
        this.toggleAddTransactionInput = this.toggleAddTransactionInput.bind(this)
        this.retrieveUserData = this.retrieveUserData.bind(this)
    }
    
    public componentDidMount() {
        document.title = "Dashboard"
        this.retrieveUserData()
    }

    public render() {
        console.log(this.state)
        return (
            <div>
                <h2>Dashboard</h2>
                <div>Welcome {this.state.user.id}</div>
                <UserTotal total={this.state.user.total}/>
                {/* <div>Total {this.state.user.total && this.state.user.total}</div> */}
                    {this.state.showAddTransactionInput ? (
                        <div>
                            Category:
                            <select id='transaction-category'>
                                <option>Food</option>
                                <option>Clothes</option>
                            </select>
                            Amount: $
                            <input id='amount' type='text'/>
                            <button onClick={this.addTransaction}>Add</button>
                            <button onClick={this.toggleAddTransactionInput}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleAddTransactionInput}>Add Transaction</button>
                        </div>
                    )}
                <div>
                    <button onClick={this.handleSignOut}>Sign Out</button>
                </div>
            </div>
        )
    }

    private retrieveUserData() {
        setTimeout(() => {
            const {uid} = this.props.match.params
            this.userAccount = firebase.database().ref().child("accounts").child(uid);
            const userTotal = this.userAccount.child("total")
            userTotal.on('value', snap => {
                console.log(snap!.val())
                this.setState({
                    ...this.state,
                    user: {
                        id: uid,
                        total: snap!.val()
                    }
                })
            }, (error: Error) => {
                console.log(error)
            })
        }, 5000)
    }

    private toggleAddTransactionInput() {
        this.setState(prevState => {
            return {
                ...this.state,
                showAddTransactionInput: !prevState.showAddTransactionInput
            }
        })
    }

    private async handleSignOut() {
        try {
            await firebase.auth().signOut()
            this.props.history.push("/")
            console.log("User successfully signed out")
        } catch(error) {
            console.log(`Unsuccessful user sign out: ${error}`)
        }
    }

    private addTransaction() {
        alert("added")
    }
}

export default DashboardPage