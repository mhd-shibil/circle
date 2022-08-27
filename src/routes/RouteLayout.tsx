import { Switch, Route, Redirect } from 'react-router-dom';

import LoginLayout from 'layout/LoginLayout';
import HomeLayout from 'layout/HomeLayout';

import RoutesPath from './RoutesPath';

const RouteLayout = () => {
  return (
    <Route>
      <Switch>
        <Redirect from={RoutesPath.DEFAULT} to={RoutesPath.LOGIN} exact={true} />
        <Route path={RoutesPath.LOGIN} component={LoginLayout} />
        <Route path={RoutesPath.ALL} component={HomeLayout} />
      </Switch>
    </Route>
  );
};

export default RouteLayout;
