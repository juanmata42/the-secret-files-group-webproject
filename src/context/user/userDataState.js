import { useReducer, useEffect } from 'react';
import UserDataReducer from './userDataReducer';
import UserDataContext from './userDataContext';
import { GET_USER, GET_USERS, GET_PROFILE } from './types';
import marvelApi from '../../services/api-marvel/api';
import UserAPI from '../../services/api-users/api-user';

export default function UserDataState(props) {
  const initialState = {
    user: [],
  };

  const [userState, dispatch] = useReducer(UserDataReducer, initialState);

  /*   useEffect(() => {
    let usersInit = new UserAPI();
    usersInit.getUsers.then((data) => {
      dispatch({ type: GET_USERS, payload: data.data.results });
      console.log('desde el state de users', data.data.results);
    });
  }, []); */

  const getUser = () => {
    let apiInit = new marvelApi();
    apiInit.getList('series').then((data) => {
      dispatch({ type: GET_USER, payload: data.data.results });
    });
  };
  const getUsers = () => {
    let usersInit = new UserAPI();
    usersInit.getUsers.then((data) => {
      dispatch({ type: GET_USERS, payload: data.data.results });
      console.log('desde la llamada getUsers', data.data.results);
    });
  };

  const getProfile = () => {
    console.log('desde getProfile');
    const profile = 'este es el profile';
    dispatch({
      type: GET_PROFILE,
      payload: profile,
    });
  };

  return (
    <UserDataContext.Provider
      value={{ userState, getUsers, getUser, getProfile }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
}
