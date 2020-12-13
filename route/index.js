import React,{memo} from 'react';
import { NativeRouter, Switch, Route, Redirect } from 'react-router-native';

import Home from '../pages/home';
import Personal from '../pages/personal';


function BaseRoute() {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/personal" component={Personal} />
        <Redirect to="/home"/>
      </Switch>
    </NativeRouter>
  );
}
export default memo(BaseRoute);
