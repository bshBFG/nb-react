import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('Has text "react app"', () => {
    render(<App />);
    const appElement = screen.getByText(/react app/i);
    expect(appElement).toBeInTheDocument();
  });
});
