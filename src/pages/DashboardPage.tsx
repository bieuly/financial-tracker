import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as firebase from 'firebase/app';

interface IDashboardPageRouterProps {
    uid: string
}

interface IDashboardPageProps extends RouteComponentProps<IDashboardPageRouterProps>{

}

interface IDashboardPageState {
    user: {
        id: string
    }
}

class DashboardPage extends React.Component<IDashboardPageProps, IDashboardPageState> {

    public constructor(props: IDashboardPageProps) {
        super(props);
        this.state = {
            user: {
                id: ""
            }
        }
        this.handleSignOut = this.handleSignOut.bind(this)
    }
    
    public componentDidMount() {
        document.title = "Dashboard"
        const {uid} = this.props.match.params
        console.log(uid)
        this.setState({
            user: {
                id: uid
            }
        })
    }

    public async handleSignOut() {
        try {
            await firebase.auth().signOut()
            this.props.history.push("/")
            console.log("User successfully signed out")
        } catch(error) {
            console.log(`Unsuccessful user sign out: ${error}`)
        }
    }

    public render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <div>Welcome {this.state.user.id}</div>
                <button onClick={this.handleSignOut}>Sign Out</button>
            </div>
        )
    }
}

export default DashboardPage