import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../views/Layout/Header';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/cartContext';

describe('The Header', () => {

  it('renders header Title', () => {
    render(
        <MemoryRouter>
            <CartProvider>
                <Header />
            </CartProvider>
        </MemoryRouter>
    );
    const title = screen.getByText(/Main Page/);
    expect(title).toBeInTheDocument();
  });

  it('renders header Shop', () => {
    render(
        <MemoryRouter>
            <CartProvider>
                <Header />
            </CartProvider>
        </MemoryRouter>
    );

    const title = screen.getByText(/Shop/i);
    expect(title).toBeInTheDocument();
  });

  it('renders header Cart', () => {
    render(
        <MemoryRouter>
            <CartProvider>
                <Header />
            </CartProvider>
        </MemoryRouter>
    );
    const title = screen.getByText(/Cart/i);
    expect(title).toBeInTheDocument();
  });

})