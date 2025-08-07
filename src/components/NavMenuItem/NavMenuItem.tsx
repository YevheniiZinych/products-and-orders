import { NavLink } from 'react-router-dom';
import { NavigationMenuData as data } from './NavigationMenuData.js';
import './NavMenuItem.scss';

export const NavMenuItem = () => {
  return (
    <ul className="nav__list d-flex flex-column gap-4 mt-5">
      {data?.map((item: any) => {
        return (
          <li key={item.title} className="nav__list-item">
            <NavLink
              to={`${item.link}`}
              className={({ isActive }) =>
                `nav__list-link ${isActive ? 'active-link' : 'inactive-link'}`
              }
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
