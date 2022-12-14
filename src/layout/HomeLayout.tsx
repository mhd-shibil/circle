import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RoutesPath from 'routes/RoutesPath';
import SideNav from 'components/side-nav/SideNav';
import TopBar from 'components/topbar/Topbar';
import TravelForm from 'components/travelform/travelform';
import PdfViewer from 'components/pdfViewer/pdfViewer';
import { useRecoilValue } from 'recoil';
import { userDetails } from 'store/atoms/userdetails.atom';
import routesPath from 'routes/RoutesPath';

const HomePage = lazy(() => import('pages/home/Home'));
const EnquiryPage = lazy(() => import('pages/Enquiry'));
const UserHome = lazy(() => import('pages/home/userHome'));
const EnquiryDetailsPage = lazy(() => import('pages/Enquiry/components/enquiryDetails'));

const Loader = () => <div className='w-full h-[calc(100vh-75px)] flex items-center justify-center'>Loading...</div>;

const HomeLayout = () => {
  const userId = useRecoilValue(userDetails);

  if (!userId) return <Redirect to={routesPath.LOGIN} />;

  return (
    <div>
      <SideNav />
      <div className='w-[calc(100%-273px)] ml-[273px] bg-slate-100 h-full'>
        <TopBar />
        <Switch>
          <Suspense fallback={<Loader />}>
            <div className='h-[calc(100vh-74px)] bg-gray-100 overflow-y-auto no-scrollbar'>
              <Route path={RoutesPath.HOME} component={HomePage} />
              <Route path={RoutesPath.ENQUIRY} component={EnquiryPage} />
              <Route path={RoutesPath.FORM} component={TravelForm} />
              <Route path={RoutesPath.USERHOME} component={UserHome} />
              <Route path={RoutesPath.ENQUIRYDETAILS} component={EnquiryDetailsPage} />
              <Route path={RoutesPath.PDF} component={PdfViewer} />
            </div>
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default HomeLayout;
