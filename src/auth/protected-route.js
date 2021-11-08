import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/loading/loading';

// qwerty importando loading, que es la pantalla de cargando para esperar, si vas a una ruta prohibida,
// te lleva a página de login. donde pone args es porque así puede renderizar hijos en rutas preparadas

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
