import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

// qwerty aquí podría testearse el renderizado, si los botones devuelven las rutas que tienen que devolver,
// y si aparecen y desaparecen botones con con mobile y Wide y estando logueado y sin loguear

import UserAPI from '../../services/api-users/api-user';

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [cResp, setCResp] = useState('topnav');
  //qwerty esto cambia el state, añadiendo la clase responsive o quitándola
  function responsiveMenu() {
    if (cResp === 'sticky-thc topnav') {
      setCResp('sticky-thc topnav responsive');
    } else {
      setCResp('sticky-thc topnav');
    }
  }

  return (
    <header className={cResp} id="myTopnav">
      <Link key="home" to="/" className="active">
        Home
      </Link>
      <Link key="gallery" to="/gallery">
        Gallery
      </Link>
      {/* qwerty esta línea hecha por gonzalo y modificada por mi, muestra u oculta dependiendo
      de si estás logueado o no*/}
      {isAuthenticated ? (
        <>
          <div
            className="userButton spaced white"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </div>
          <Link key="my-gallery" to="/my-gallery">
            My Heroes
          </Link>
          <Link key="account" to="/account">
            Account
          </Link>
        </>
      ) : (
        <div className="userButton spaced" onClick={() => loginWithRedirect()}>
          <FontAwesomeIcon className="spaced" icon={faUserCircle} />
          Member
        </div>
      )}
      <Link key="about" to="/about">
        About us
      </Link>
      <div className="icon">
        <FontAwesomeIcon icon={faBars} onClick={responsiveMenu} inverse />
      </div>
    </header>
  );
}
