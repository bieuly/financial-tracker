import 'firebase/auth';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <h1>Financial Tracker</h1>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/dashboard/:uid" component={DashboardPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
