import titleImg from '../../assets/Logo-FilesCut-Long.png';
import './home-page.scss';
import Carrousel from '../../core/carrousel/carrousel';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Card from '../../core/card/card';
import marvelApi from '../../services/api-marvel/api';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import UserAPI from '../../services/api-users/api-user';
import UserDataContext from '../../context/user/userDataContext';
export default function HomePage() {
  //qwerty  iniciamos slides (diapositivas) y el state, que será una lista de todos los objetos

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [users, setUsers] = useState(false);

  let slides;
  const [state, setState] = useState(false);
  //qwerty aquí se llama a marvelApi, se crea la variable searchFor como un string dependiendo del día
  useEffect(() => {
    let apiInit = new marvelApi();

    //to search for days, use mon, t, we, thu, fri, sa, su
    let searchFor;
    switch (new Date().getDay()) {
      case 0:
        searchFor = 'su';
        break;
      case 1:
        searchFor = 'mon';
        break;
      case 2:
        searchFor = 't';
        break;
      case 3:
        searchFor = 'we';
        break;
      case 4:
        searchFor = 'th';
        break;
      case 5:
        searchFor = 'f';
        break;
      case 6:
        searchFor = 'sat';
        break;
      default:
        searchFor = 'a';
    }
    //qwerty aquí se hace uso de la llamada de la api, es básicamente el mismo método que buscar por
    //nombre que contenga ""
    apiInit.getCharactersOfDay(searchFor).then((item) => {
      setState(item.data.results);
    });
    //to fix well this logic because it just creates an user the first time qwerty
    UserAPI.getUsers().then((item) => setUsers(item));
    if (isAuthenticated) {
      if (users) {
        if (users.length === 0) {
          UserAPI.addUser(user.name);
        }
      }
    }
  }, []);
  let template;
  //este if seguramente habŕa que incluirlo en el testing. Si State no es false, es decir, si se ha cargado,
  // se llena slides con las cards. si no, se renderiza vacío hasta que se hace lo de antes
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
        <Carrousel title={"Today's Top Heroes"} slides={slides} />
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
/*qwerty se puede usar esto (con un import de una imagen como placeholder) para testing como mock.
Habría que meterlo como el state. Recordad que el testing en este caso debería ser asincrono
y no usamos llamadas a la api al testear, para evitar rellenar las 3000 llamadas
keep it for testing purposes
const fantasticFour = { image: placeholder, name: 'Fantastic Four' };
const placeholderSlides = [
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
    <>
      <Card item={fantasticFour} />
    </>,
  ];
*/
