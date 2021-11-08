import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SuperHeroMyCollection from './superhero-my-collection';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
};

jest.mock('@auth0/auth0-react');

beforeEach(() => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
  });

  render(
    <Router>
      <SuperHeroMyCollection />
    </Router>
  );
});

describe('Given the component superhero-my-collection', () => {
  describe('when component is instantiated', () => {
    test('then it should show a header', () => {
      expect(screen.getByText('MY HEROES')).toBeInTheDocument();
    });
  });
});
