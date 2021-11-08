import titleImg from '../../assets/Logo-FilesCut-Long.png';
import './superhero-my-collection.scss';
import Carrousel from '../../core/carrousel/carrousel';
import React, { Fragment, useEffect, useState } from 'react';
import Card from '../../core/card/card';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import UserAPI from '../../services/api-users/api-user';
//qwerty creo que este archivo no sirve para nada y puede borrarse

export default function SuperHeroMyCollection() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [users, setUsers] = useState(false);
  let slides;
  const [state, setState] = useState(false);
  useEffect(() => {
    UserAPI.getUser(1).then((item) => setState(item.favourites));
  }, []);
  let template;
  if (state) {
    slides = state.map((item) => (
      <>
        <Card item={item} />
      </>
    ));
    template = (
      <Fragment>
        <h1 className="ImgTitle">
          <img
            className="ImgTitle__photo"
            src={titleImg}
            alt="The secret Files"
          />
        </h1>
        <Carrousel title={'My Heroes'} slides={slides} />
      </Fragment>
    );
  } else {
    template = (
      <Fragment>
        <h1 className="ImgTitle">
          <img
            className="ImgTitle__photo"
            src={titleImg}
            alt="The secret Files"
          />
        </h1>
      </Fragment>
    );
  }

  return template;
}
