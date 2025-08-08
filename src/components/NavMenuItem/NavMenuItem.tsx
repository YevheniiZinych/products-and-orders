import { NavLink } from 'react-router-dom';
import './NavMenuItem.scss';

type NavData = {
  title: string;
  link: string;
};

const NavigationMenuData = [
  {
    title: 'ПРИХОД',
    link: 'orders',
  },

  {
    title: 'ПРОДУКТЫ',
    link: 'products',
  },
];

export const NavMenuItem = () => {
  return (
    <ul className="nav__list d-flex flex-column gap-4 mt-5">
      {NavigationMenuData?.map((item: NavData) => {
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
