import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from './admin/auth/Auth';
import Main from './admin/Main';
import PrivateRoute from './PrivateRoute';


class App extends Component {
  
  render() {
    
    return (
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/login" component={Auth} />
          <PrivateRoute path="/admin" component={Main} />
        </Switch>  
    );
  }
}



export default App;


