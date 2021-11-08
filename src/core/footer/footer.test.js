import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';
import Footer from './footer';

let container;
beforeEach(() => {
  container = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
});

describe('Given the component Footer', () => {
  describe('when component is instantiated', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    test('then it should be rendered', async () => {
      expect(container.firstChild.classList.contains('footer')).toBe(true);
    });
    test('then it should has a img with alt attribute', async () => {
      expect(screen.queryAllByRole('img')).toHaveLength(1);
    });
    test('then it should has a img in the footer', async () => {
      expect(screen.queryAllByRole('img')).toHaveLength(1);
    });
  });
});
