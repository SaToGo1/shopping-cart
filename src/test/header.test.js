import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header';

describe('The Header ', () => {

  it('renders header Title', () => {
    render(<Header />);
    screen.debug();
    const title = screen.getByText(/Main Page/i);
    expect(title).toBeInTheDocument();
  });
})