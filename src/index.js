import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import UserDataState from './context/user/userDataState';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
import Offline from './components/offline/Offline';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserDataState>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <Offline>
            <App />
          </Offline>
        </Auth0Provider>
      </UserDataState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
