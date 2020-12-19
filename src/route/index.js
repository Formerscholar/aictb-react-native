import React,{memo} from 'react';
import { NativeRouter, Switch, Route, Redirect } from 'react-router-native';

import Login from '../pages/login'
import Home from '../pages/home';
import Personal from '../pages/personal';


function BaseRoute() {
  return (
    <NativeRouter>
      
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/personal" component={Personal} />
        <Redirect to="/login"/>
      </Switch>
    </NativeRouter>
  );
}
export default memo(BaseRoute);
