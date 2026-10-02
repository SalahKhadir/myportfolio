import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../../components/ContactForm';
import { LanguageProvider } from '../../components/LanguageContext';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
) as jest.Mock;

describe('ContactForm Component', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    );
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  });

  it('shows submitting state and calls API on submit', async () => {
    render(
      <LanguageProvider>
        <ContactForm />
      </LanguageProvider>
    );
    
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Message'), { target: { value: 'Hello World' } });

    fireEvent.submit(screen.getByRole('button', { name: /Submit Inquiry/i }));

    expect(screen.getByRole('button', { name: /Sending.../i })).toBeInTheDocument();
    
    expect(global.fetch).toHaveBeenCalledTimes(1);
    
    const successButton = await screen.findByRole('button', { name: /Sent!/i });
    expect(successButton).toBeInTheDocument();
  });
});
