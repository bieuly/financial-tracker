import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as React from 'react';
import LoginForm from './components/LoginForm'

class App extends React.Component {

  public handleLogin = async (username: string, password: string) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        alert(`Successfully signed in!`)
      })
    } catch(error) {
      console.log(error)
    }
  }

  public render() {
    return (
      <div className="App">
        Financial Tracker
        <LoginForm handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
