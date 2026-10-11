import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageToggle from '../../components/LanguageToggle';
import { LanguageProvider, useLanguage } from '../../components/LanguageContext';

const TestConsumer = () => {
  const { language } = useLanguage();
  return <div data-testid="current-lang">{language}</div>;
};

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders language toggle button displaying FR initially when language is en', () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
        <TestConsumer />
      </LanguageProvider>
    );

    const button = screen.getByRole('button', { name: /Toggle Language/i });
    expect(button).toHaveTextContent('FR');
    expect(screen.getByTestId('current-lang')).toHaveTextContent('en');
  });

  it('toggles language between en and fr on click', () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
        <TestConsumer />
      </LanguageProvider>
    );

    const button = screen.getByRole('button', { name: /Toggle Language/i });
    fireEvent.click(button);

    expect(button).toHaveTextContent('EN');
    expect(screen.getByTestId('current-lang')).toHaveTextContent('fr');
    expect(localStorage.getItem('language')).toBe('fr');

    fireEvent.click(button);
    expect(button).toHaveTextContent('FR');
    expect(screen.getByTestId('current-lang')).toHaveTextContent('en');
    expect(localStorage.getItem('language')).toBe('en');
  });
});
