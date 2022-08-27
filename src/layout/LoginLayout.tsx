import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import RoutesPath from 'routes/RoutesPath';

const LoginPage = lazy(() => import('pages/login/LoginPage'));

const LoginLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={RoutesPath.LOGIN} component={LoginPage} />
      </Switch>
    </Suspense>
  );
};

export default LoginLayout;
