import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1 className="pt-5 mb-5">404 Page not found</h1>
      <NavLink
        to="/"
        style={{
          fontSize: '20px',
        }}
      >
        Back to home page
      </NavLink>
    </>
  );
};

export default NotFound;
