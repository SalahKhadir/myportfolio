import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SystemSpecsModal from '../../components/SystemSpecsModal';
import { ARCHITECTURE_SPECS } from '../../resources/architectureSpecs';

describe('SystemSpecsModal Component', () => {
  const ticketHubSpec = ARCHITECTURE_SPECS['TicketHub'];

  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <SystemSpecsModal spec={ticketHubSpec} isOpen={false} onClose={jest.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders modal with topology and tabs when open', () => {
    render(
      <SystemSpecsModal spec={ticketHubSpec} isOpen={true} onClose={jest.fn()} />
    );

    expect(screen.getByText('TicketHub')).toBeInTheDocument();
    expect(screen.getByText(/SYSTEM TOPOLOGY & SPECS/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Interactive Node Graph/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Latency Targets/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Security Protocols/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Resilience & Failover/i })).toBeInTheDocument();
  });

  it('switches between tabs and updates inspector content', () => {
    render(
      <SystemSpecsModal spec={ticketHubSpec} isOpen={true} onClose={jest.fn()} />
    );

    // Click Latency Targets tab
    fireEvent.click(screen.getByRole('button', { name: /Latency Targets/i }));
    expect(screen.getByText(/P95 API Response Target/i)).toBeInTheDocument();
    expect(screen.getByText(ticketHubSpec.specs.latency.p95Target)).toBeInTheDocument();

    // Click Security Protocols tab
    fireEvent.click(screen.getByRole('button', { name: /Security Protocols/i }));
    expect(screen.getByText(/Authentication & Session Model/i)).toBeInTheDocument();
    expect(screen.getByText(ticketHubSpec.specs.security.authStrategy)).toBeInTheDocument();

    // Click Resilience & Failover tab
    fireEvent.click(screen.getByRole('button', { name: /Resilience & Failover/i }));
    expect(screen.getByText(/Concurrency & Worker Model/i)).toBeInTheDocument();
    expect(screen.getByText(ticketHubSpec.specs.resilience.concurrency)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <SystemSpecsModal spec={ticketHubSpec} isOpen={true} onClose={handleClose} />
    );

    const closeBtn = screen.getByRole('button', { name: /Close system specs modal/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <SystemSpecsModal spec={ticketHubSpec} isOpen={true} onClose={handleClose} />
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

