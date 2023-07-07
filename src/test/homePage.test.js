import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../views/pages/HomePage'
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/cartContext';

describe('The Home Page', () => {

    it('renders STORE', () => {
      render(
        <MemoryRouter>
            <CartProvider>
                <HomePage />
            </CartProvider>
        </MemoryRouter>
      );
      const title = screen.getByText(/STORE/i);
      expect(title).toBeInTheDocument();
    });

    it('renders an image', () => {
        render(
            <MemoryRouter>
                <CartProvider>
                    <HomePage />
                </CartProvider>
            </MemoryRouter>
          );

      const img = screen.getByRole('img', { "data-test-id": 'homeImg' });
      expect(img).toBeInTheDocument();
    });
})