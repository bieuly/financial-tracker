import * as React from 'react';
import LoginForm from './components/LoginForm'

class App extends React.Component {

  // constructor(props: {}) {
  //   super(props); 
  //   this.state = {

  //   }
  // }

  public handleLogin = (username: string, password: string) => {
    alert(`${username} ${password}`)
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
