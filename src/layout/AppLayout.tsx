import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import './layout.scss';
import { Toaster } from 'react-hot-toast';

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="row mx-0">
        <div className="col-12 p-0">
          <TopMenu />
        </div>
      </div>

      <div className="row mx-0">
        <div className="col-2 ps-0 pe-0">
          <NavigationMenu />
        </div>

        <div className="app-layout__container col-10 ps-0 pe-0">
          <main className="app-layout__content position-relative">
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default AppLayout;
