import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import './card.scss';
import notFound from '../../assets/portrait_uncanny.jpg';
import Shield from '../../assets/Captain-America-Shield.svg';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { WhatsappShareButton } from 'react-share';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import UserAPI from '../../services/api-users/api-user';
export default function Card({ item, func }) {
  function addToFav() {}
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, setState] = useState(false);
  const history = useHistory();
  //qwerty este state creo que no se puede poner en el array de dependencies, que si no hace bucle.
  useEffect(() => {
    UserAPI.getUser(1).then((item) => setState(item.favourites));
  }, []);
  function addToFav() {
    //qwerty lógica de si está o no autenticado y si está o no en favoritos. ESTO FUNCIONA
    if (isAuthenticated) {
      //qwerty this would be good if it re rendered the parent page with the updated favourite list
      if (state.filter((event) => event.id === item.id).length) {
        let favoriteIndex = state
          .map(function (e) {
            return e.id;
          })
          .indexOf(item.id);
        UserAPI.deleteFavorite(1, favoriteIndex);
        console.log('deleted');
      } else {
        UserAPI.addFavorite(1, item);
        console.log('added');
      }
    }
  }
  const mainImg = item.thumbnail.path + '/portrait_uncanny.jpg' ?? notFound;
  const name = item.name || item.title;
  //qwerty por el link, le mandará h si es hero, s si es serie
  let type;
  if (item.name) {
    type = 'h';
  } else {
    type = 's';
  }
  return (
    <>
      <div className="card" props={'something'}>
        <Link to={`/super-hero-detail/${item.id}${type}`}>
          <img className="card__img" src={mainImg} alt={name} />
        </Link>
        <div className="appearOnHover">
          <h2 className="card__title">{name}</h2>
          <div className="card__btn-container">
            <WhatsappShareButton
              className="shareBtn"
              url={`http://localhost:3000/super-hero-detail/${item.id}`}
            >
              <FontAwesomeIcon
                className="shareBtnIcon"
                icon={faShareAltSquare}
                size="lg"
              />
            </WhatsappShareButton>
            <button className="addFav" onClick={addToFav}>
              <img
                className="shieldFav"
                src={Shield}
                alt="captain america shield"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//qwerty yo testearía si el link funciona bien y si el botón de favoritos funciona bien
