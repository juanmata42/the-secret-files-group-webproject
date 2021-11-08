import {
  GET_CHARACTER,
  GET_LIST_SERIES,
  GET_CHARACTER_BY_NAME,
} from './seriesType';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_LIST_SERIES:
      return {
        ...state,
        serie: payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        characters: payload,
      };
    case GET_CHARACTER_BY_NAME:
      return {
        ...state,
        character: payload,
      };
    default:
      return state;
  }
};
