import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/home-page';
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register-page/resgister-page';
import AccountPage from './components/account-page/account-page';
import SuperHeroGalleryPage from './components/super-hero-gallery-page/super-hero-gallery-page';
import AboutPage from './components/about-page/about-page';
import SuperHeroDetail from './components/superhero-detail/superhero-detail';
import SuperHeroMyCollection from './components/superhero-my-collection/superhero-my-collection';
import { Layout } from './core/layout/layout';
import UserDataState from './context/user/userDataState';

//qwerty lo único que habŕia que testear aquí es si es capaz de renderizar cada elemento/path
//habrá que usar un mock de que estás logueado. no sé cómo hacer eso, documentación auth0

import Loading from './components/loading/loading';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        {/* <Route path="/register">
          <RegisterPage />
        </Route> */}
        <Route path="/gallery">
          <SuperHeroGalleryPage />
        </Route>
        <ProtectedRoute path="/account">
          <AccountPage />
        </ProtectedRoute>
        <ProtectedRoute path="/my-gallery">
          <SuperHeroMyCollection />
        </ProtectedRoute>
        <Route path="/super-hero-detail/:heroid">
          <SuperHeroDetail />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
