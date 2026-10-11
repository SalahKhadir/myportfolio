import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TerminalAssistant from '../../components/TerminalAssistant';
import { LanguageProvider } from '../../components/LanguageContext';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('TerminalAssistant Component', () => {
  it('renders toggle button and toggles open/close state with backdrop blur', () => {
    const { container } = render(
      <LanguageProvider>
        <TerminalAssistant />
      </LanguageProvider>
    );

    const toggleBtn = screen.getByRole('button', { name: /Open Sal/i });
    expect(toggleBtn).toBeInTheDocument();

    // Initially drawer has opacity-0 pointer-events-none
    const backdrop = container.querySelector('.backdrop-blur-xs');
    expect(backdrop).toHaveClass('opacity-0');

    // Click toggle button to open
    fireEvent.click(toggleBtn);
    expect(backdrop).toHaveClass('opacity-100');

    // Click backdrop to close
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(backdrop).toHaveClass('opacity-0');
    }
  });
});
