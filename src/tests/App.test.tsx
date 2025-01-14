import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('Wordle App tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the main page', () => {
    // Arrange
    const board = screen.getByTestId('board');
    const rows = screen.getAllByTestId(/row-/);

    // Assert
    expect(board).toBeInTheDocument();
    expect(rows.length).toBe(6);
  });
});
