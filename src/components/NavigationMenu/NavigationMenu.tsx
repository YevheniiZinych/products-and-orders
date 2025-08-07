import { memo } from 'react';
import { IoIosSettings } from 'react-icons/io';
import { NavMenuItem } from '../NavMenuItem/NavMenuItem';
import userImg from '../../assets/img/user.png';
import './NavigationMenu.scss';

const NavigationMenu = () => {
  return (
    <aside className="nav-menu d-flex flex-column align-items-center shadow-lg  ">
      <div className="nav-menu__img--wrapp position-relative mt-5">
        <img className="nav-menu__user-img" src={userImg} alt="user photo" loading="lazy" />
        <div className="nav-menu__user-settings position-absolute bottom-0 end-0  d-flex align-items-center justify-content-center shadow-sm">
          <IoIosSettings size="15" />
        </div>
      </div>
      <nav className="nav">
        <NavMenuItem />
      </nav>
    </aside>
  );
};

export default memo(NavigationMenu);
