import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';

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
      <Header />
    </Router>
  );
});

describe('When component is instantiated...', () => {
  test('renders navbar when your logged in', () => {
    expect(screen.getByText(/My Heroes/i)).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
  });
  test('the length of menu links should be 5 when your logged in ', () => {
    expect(screen.queryAllByRole('link')).toHaveLength(5);
  });
});
