import { Outlet } from 'react-router-dom';
import { TopMenu } from '../components/TopMenu/TopMenu';
import { NavigationMenu } from '../components/NavigationMenu/NavigationMenu';
import './layout.scss';

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="row mx-0">
        <div className="col-12 p-0 ">
          <TopMenu />
        </div>
      </div>
      <div className="row mx-0 h-100">
        <div className="col-2">
          <NavigationMenu />
        </div>
        <div className="col-10">
          <main className="app-layout__content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
