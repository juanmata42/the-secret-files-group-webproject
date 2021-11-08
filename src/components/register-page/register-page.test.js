import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RegisterPage from './resgister-page';

describe('Given the component RegisterPage', () => {
  describe('when component is instantiated', () => {
    test('then it should be rendered', async () => {
      render(<RegisterPage />);
      expect(
        screen.getByRole('heading', { name: /register/i })
      ).toBeInTheDocument();
    });
    test('then placeholder username should be not null', () => {
      render(<RegisterPage />);
      const inputNode = screen.queryByPlaceholderText(/username/i);

      expect(inputNode).not.toEqual(null);
    });
  });
});
