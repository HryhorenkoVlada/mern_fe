import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from 'src/context/authContext';

import './NavLinks.scss';
import { Button } from 'src/shared/ui';

const NavLinks = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {isLoggedIn ? (
        <>
          <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
          </li>
          <li>
            <NavLink to="/places/new">NEW PLACE</NavLink>
          </li>
          <li>
            <Button onClick={logout}>SIGN OUT</Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/sign_in">SIGN IN</NavLink>
          </li>
          <li>
            <NavLink to="/sign_up">SIGN UP</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
