import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import RoutesPath from 'routes/RoutesPath';

const LoginPage = lazy(() => import('pages/login/LoginPage'));
const AgentLogin = lazy(() => import('pages/login/AgentLogin'));

const LoginLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={RoutesPath.USER_LOGIN} component={LoginPage} />
        <Route path={RoutesPath.AGENT_LOGIN} component={AgentLogin} />
      </Switch>
    </Suspense>
  );
};

export default LoginLayout;
