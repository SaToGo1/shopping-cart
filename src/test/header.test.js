import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header';

describe('The Header ', () => {

  it('renders header Title', () => {
    render(<Header />);
    const title = screen.getByText(/Main Page/i);
    expect(title).toBeInTheDocument();
  });

  it('renders header Shop', () => {
    render(<Header />);
    const title = screen.getByText(/Shop/i);
    expect(title).toBeInTheDocument();
  });

  it('renders header Cart', () => {
    render(<Header />);
    const title = screen.getByText(/Cart/i);
    expect(title).toBeInTheDocument();
  });

  it('matches Snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
})