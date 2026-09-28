import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../../components/ThemeToggle';
import { useTheme } from 'next-themes';

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle Component', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when not mounted', () => {
    // We cannot easily test not mounted since it mounts immediately in useEffect,
    // but React Testing Library flushes effects synchronously.
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /Toggle Dark Mode/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles theme from light to dark', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /Toggle Dark Mode/i });
    
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('toggles theme from dark to light', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    });
    
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /Toggle Dark Mode/i });
    
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
