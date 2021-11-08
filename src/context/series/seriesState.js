import { useReducer, useEffect } from 'react';
import seriesReducer from '../series/seriesReducer';
import SeriesContext from '../series/seriesContext';
import {
  GET_CHARACTER,
  GET_LIST_SERIES,
  GET_CHARACTER_BY_NAME,
} from './seriesType';
import marvelApi from '../../services/api-marvel/api';

export default function SerieState(props) {
  const initialState = {
    serie: [
      {
        id: '',
        title: '',
        characters: '',
        thumbnail: '',
        startYear: '',
        endYear: '',
      },
    ],
    characters: [{ id: '', name: '', series: '', thumbnail: '', comics: '' }],
    character: {
      id: '',
      name: '',
      series: '',
      thumbnail: '',
      comics: '',
      stories: '',
    },
  };

  const [series, dispatch] = useReducer(seriesReducer, initialState);

  useEffect(() => {
    let apiInit = new marvelApi();
    apiInit
      .getList('series')
      .then((data) =>
        dispatch({ type: GET_LIST_SERIES, payload: data.data.results })
      );
  }, []);

  const getListSeries = () => {
    let apiInit = new marvelApi();
    apiInit.getList('series').then((data) => {
      dispatch({ type: GET_LIST_SERIES, payload: data.data.results });
    });
  };

  const getListCharacters = () => {
    let apiInit = new marvelApi();
    apiInit.getList('characters').then((data) => {
      dispatch({ type: GET_CHARACTER, payload: data.data.results });
    });
  };

  const getCharactersByName = (character) => {
    let apiInit = new marvelApi();
    apiInit.getCharactersByName(character).then((data) => {
      dispatch({ type: GET_CHARACTER_BY_NAME, payload: data.data.results });
    });
  };

  return (
    <SeriesContext.Provider
      value={{ series, getListSeries, getListCharacters, getCharactersByName }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
}
