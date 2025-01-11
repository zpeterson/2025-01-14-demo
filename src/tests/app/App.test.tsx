import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../app/App';

describe('App tests', () => {
  it('renders the main page', () => {
    // Arrange
    render(<App />);

    // Act
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    const heading = screen.getByRole('heading', { level: 1, name: /Vite \+ React/i });
    const paragraphs = screen.getAllByRole('paragraph');

    // Assert
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraphs.length).toBe(2);
  });

  it('increments the count when button is clicked', () => {
    // Arrange
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });

    // Act
    fireEvent.click(button);

    // Assert
    expect(button).toHaveTextContent('count is 1');
  });
});
