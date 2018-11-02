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
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                console.log("User is successfully signed out")
                return
            }
            console.log(user)
            this.props.history.push(`/dashboard/${user!.uid}`);
        })
    }

    public handleLogin = async (username: string, password: string) => {
        try {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            await firebase.auth().signInWithEmailAndPassword(username, password);
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