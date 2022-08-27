import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import RoutesPath from 'routes/RoutesPath';
import SideNav from 'components/side-nav/SideNav';
import TopBar from 'components/topbar/Topbar';

const HomePage = lazy(() => import('pages/home/Home'));

const Loader = () => (
  <div className='w-full h-[calc(100vh-75px)] flex items-center justify-center'>Loading...</div>
);

const HomeLayout = () => {
  return (
    <div>
      <SideNav />
      <div className='w-[calc(100%-273px)] ml-[273px] bg-slate-100 h-full'>
        <TopBar />
        <Switch>
          <Suspense fallback={<Loader />}>
            <div className='h-[calc(100vh-74px)] bg-gray-100 overflow-y-auto'>
              <Route path={RoutesPath.HOME} component={HomePage} />
            </div>
          </Suspense>
        </Switch>
      </div>
    </div >
  );
};

export default HomeLayout;
