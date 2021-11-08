import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { SuperHeroGalleryPage } from './super-hero-gallery-page';

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
      <SuperHeroGalleryPage />
    </Router>
  );
});

describe('Given the component super-hero-gallery', () => {
  test('then the component should be instantiated', () => {
    expect(screen.getByText(/Fabian Cortez/i)).toBeInTheDocument();
  });
});
