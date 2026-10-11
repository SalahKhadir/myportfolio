import React from 'react';
import { render, act } from '@testing-library/react';
import CustomCursor from '../../components/CustomCursor';

describe('CustomCursor Component', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    jest.clearAllMocks();
  });

  it('renders nothing and attaches no listeners when fine pointer is not available', () => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    const { container } = render(<CustomCursor />);
    expect(container.firstChild).toBeNull();
    expect(addEventListenerSpy).not.toHaveBeenCalledWith('mousemove', expect.any(Function));
  });

  it('attaches listeners when fine pointer is available and cleans up on unmount', () => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = render(<CustomCursor />);
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));

    act(() => {
      unmount();
    });

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
  });
});
