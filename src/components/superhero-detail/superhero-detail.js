import React, { Fragment, useEffect, useState } from 'react';
import marvelApi from '../../services/api-marvel/api';
import '../../App.scss';
import './superhero-detail.scss';
import { useParams } from 'react-router-dom';
import notFound from '../../assets/2014298.jpg';
import Card from '../../core/card/card';
export default function SuperHeroDetail() {
  //qwerty esta página se rellena con info de la tarjeta pulsada.
  //Se actualiza al pusar una tarjeta dentro de ella
  //qwerty heroid es lo que tomamos de la última parte de la url de la página
  const { heroid } = useParams();
  const [idState, setIdState] = useState(heroid);
  let type = heroid.substr(-1);
  let id = heroid.slice(0, -1);
  const [state, setState] = useState(false);
  let allCards;
  const [cards, setCards] = useState(false);
  let cardsTemplate;
  //qwerty no comento mucho porque es básicamente todo lo mismo que en super-hero-gallery
  useEffect(() => {
    let apiInit = new marvelApi();
    //qwerty dentro de este useEffect, 
    if (type === 's') {
      apiInit.getSerie(id).then((item) => {
        setState(item.data.results[0]);
      });
      apiInit.getCharactersBySerie(id).then((item) => {
        setCards(item.data.results);
      });
    } else {
      apiInit.getCharacter(id).then((item) => {
        setState(item.data.results[0]);
      });
      apiInit.getSeriesByCharacter(id).then((item) => {
        setCards(item.data.results);
      });
    }
    console.log(cards);
  }, [heroid]);
  let template;
  //qwertylo mismo que en home, crea el template, comprueba que state se haya cargado y luego sigue
  if (state) {
    let text;
    if (state.name) {
      text = [`Appears in ${state.comics.available} comics`, 'Series'];
    } else {
      if (!state.startYear) {
        text = ['', 'Main Characters'];
      } else {
        if (state.endYear) {
          text = [
            `Published from ${state.startYear} to ${state.endYear}`,
            'Main Characters',
          ];
        } else {
          text = [
            `Started in ${state.startYear} and still running`,
            'Main Characters',
          ];
        }
      }
    }
    if (cards) {
      allCards = cards.map((item) => (
        <li className="list-container__item" key={item.id}>
          <Card item={item} />
        </li>
      ));
      cardsTemplate = (
        <Fragment>
          {/* in v2 give checkbox so it can change <button>Show Characters</button>
        <button>Show Series</button> */}
          <ul className="list-container">{allCards}</ul>;
        </Fragment>
      );
    } else {
      cardsTemplate = (
        <Fragment>
          {/* in v2 give checkbox so it can change <button>Show Characters</button>
        <button>Show Series</button> */}
          <ul className="list-container"></ul>;
        </Fragment>
      );
    }
    template = (
      <div className="superhero-detail">
        <div className="superhero-detail__pseudoBackground">
          <img
            src={state.thumbnail.path + '/landscape_incredible.jpg' ?? notFound}
            alt={state.name || state.title}
          />
        </div>
        <div className="hero-card">
          <header className="card-header">
            <div className="card-header__top">
              <div className="card-imagecontainerprincipal">
                <Card item={state} />
              </div>
              <h1 className="card-header__title">
                {state.name || state.title}
              </h1>
            </div>
            <div className="card-header__bottom">{text[0]}</div>
          </header>
          <div className="card-body"></div>
          <div className="card-gallery">
            <h2 className="card-gallery__title">{text[1]}</h2>
            <div className="card-gallery__gallery">{cardsTemplate}</div>
          </div>
        </div>
      </div>
    );
  } else {
    template = (
      <>
        <div className="superhero-detail"></div>
      </>
    );
  }
  return template;
}
