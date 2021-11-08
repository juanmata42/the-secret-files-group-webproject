import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';

describe('Given the component LoginPage', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', async () => {
      render(<LoginPage />);
      expect(
        screen.getByRole('heading', { name: /login/i })
      ).toBeInTheDocument();
    });
    test('then placeholder username should be not null', () => {
      render(<LoginPage />);
      const inputNode = screen.queryByPlaceholderText(/username/i);
      console.log(inputNode);
      expect(inputNode).not.toEqual(null);
    });
  });
});
