import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../components/homePage'

describe('The Home Page ', () => {

    it('renders STORE', () => {
      render(<HomePage />);
      const title = screen.getByText(/STORE/i);
      expect(title).toBeInTheDocument();
    });
})