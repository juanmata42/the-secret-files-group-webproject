import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AccountPage from './account-page';

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
      <AccountPage />
    </Router>
  );
});

describe('Given the component AccountPage', () => {
  describe('when component is instantiated', () => {
    test('then placeholder username should be not null', () => {
      const inputNode = screen.queryByPlaceholderText('username');
      expect(inputNode).not.toEqual(null);
    });

    test('loads and displays heading h1 "Account"', async () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Account');
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    test('button is enabled"', async () => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });
});
