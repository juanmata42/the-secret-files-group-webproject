import Card from '../../core/card/card';
import './super-hero-gallery-page.scss';
import marvelApi from '../../services/api-marvel/api';
import React, { Fragment, useEffect, useState } from 'react';
import Mus from '../../core/initiative/mus';
export default function SuperHeroGalleryPage() {
  //qwerty esta función hace un poco lo mismo que home, pero con una llamada a todos los elementos
  //de characters y creando sus tarjetas en una lista, no en un carrousel
  let allCards;
  const [state, setState] = useState(false);
  useEffect(() => {
    let apiInit = new marvelApi();
    apiInit.getList('characters').then((item) => {
      setState(item.data.results);
    });
  }, []);
  let template;
  if (state) {
    console.log(state);
    allCards = state.map((item) => (
      <li className="list-container__item" key={item.id}>
        <Card item={item} />
      </li>
    ));
    template = (
      <Fragment>
        {/* in v2 give checkbox so it can change <button>Show Characters</button>
        <button>Show Series</button> */}
        <ul className="list-container">{allCards}</ul>;
        <Mus />
      </Fragment>
    );
  } else {
    template = (
      <Fragment>
        {/* in v2 give checkbox so it can change <button>Show Characters</button>
        <button>Show Series</button> */}
        <ul className="list-container"></ul>;
      </Fragment>
    );
  }
  return template;
}
