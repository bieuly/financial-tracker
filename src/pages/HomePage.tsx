import * as firebase from 'firebase/app';
import * as React from 'react'
import LoginForm from '../components/LoginForm'
import { History } from 'history';

interface IHomePageProps {
    history: History
}

class HomePage extends React.Component<IHomePageProps> {

    public componentDidMount() {
        document.title = "Financial Tracker"
    }

    public handleLogin = async (username: string, password: string) => {
        try {
          await firebase.auth().signInWithEmailAndPassword(username, password);
          firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            this.props.history.push(`/dashboard/${user!.uid}`)
          })
        } catch(error) {
          console.log(error);
        }
      }

    public render() {
        return (
            <div>
                <h2>Home Page</h2>
                <LoginForm handleLogin={this.handleLogin}/>
            </div>
        )
    }
}

export default HomePage