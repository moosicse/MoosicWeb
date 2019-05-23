import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import LoginContainer from '../apps/auth/containers/LoginContainer';
import HomeContainer from '../apps/home/containers/HomeContainer';


class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/home' component={HomeContainer}/>
        <Route component={() => {return <Redirect to='/home' />;}}/>
      </Switch>
    );
  }
}

export default AppRouter;
