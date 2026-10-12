import React from 'react';
import { render, act } from '@testing-library/react';
import TargetCursor from '../../components/TargetCursor';

describe('TargetCursor Component', () => {
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    jest.clearAllMocks();
  });

  it('renders nothing when fine pointer is not available', () => {
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

    const { container } = render(<TargetCursor />);
    expect(container.firstChild).toBeNull();
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

    const { unmount } = render(<TargetCursor />);
    expect(addEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function), { passive: true });

    act(() => {
      unmount();
    });

    expect(removeEventListenerSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
  });
});
