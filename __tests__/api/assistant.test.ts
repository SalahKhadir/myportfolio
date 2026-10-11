/**
 * @jest-environment node
 */
import { POST } from '@/app/api/assistant/route';
import { NextRequest } from 'next/server';

const mockGenerateContent = jest.fn();

jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
      getGenerativeModel: jest.fn().mockReturnValue({
        generateContent: (...args: unknown[]) => mockGenerateContent(...args),
      }),
    })),
  };
});

function createRequest(body: unknown, ip?: string): NextRequest {
  const headers = new Headers();
  if (ip) {
    headers.set('x-forwarded-for', ip);
  }
  return new NextRequest('http://localhost:3000/api/assistant', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

describe('POST /api/assistant', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('rejects invalid JSON payload with 400', async () => {
    const req = new NextRequest('http://localhost:3000/api/assistant', {
      method: 'POST',
      body: 'invalid-json{',
      headers: { 'x-forwarded-for': '10.0.0.1' },
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Invalid request payload. JSON body is required.');
  });

  it('rejects payload missing message field with 400', async () => {
    const req = createRequest({}, '10.0.0.2');
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("Missing required 'message' field.");
  });

  it('rejects message that is not a string with 400', async () => {
    const req = createRequest({ message: 12345 }, '10.0.0.3');
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Message must be a string.');
  });

  it('rejects empty or whitespace-only message with 400', async () => {
    const req = createRequest({ message: '   ' }, '10.0.0.4');
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Message must be non-empty and cannot exceed 500 characters.');
  });

  it('rejects message longer than 500 characters with 400', async () => {
    const longMessage = 'a'.repeat(501);
    const req = createRequest({ message: longMessage }, '10.0.0.5');
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Message must be non-empty and cannot exceed 500 characters.');
  });

  it('allows up to 5 requests per IP and rate limits on the 6th with 429', async () => {
    mockGenerateContent.mockResolvedValue({
      response: { text: () => 'Test reply' },
    });

    const ip = '192.168.1.100';

    for (let i = 0; i < 5; i++) {
      const req = createRequest({ message: 'Hello' }, ip);
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    const rateLimitedReq = createRequest({ message: 'Hello again' }, ip);
    const res = await POST(rateLimitedReq);
    expect(res.status).toBe(429);
    const data = await res.json();
    expect(data.error).toBe('Too many requests. Please wait a minute before trying again.');
  });

  it('trims whitespace and returns assistant reply on success', async () => {
    mockGenerateContent.mockResolvedValue({
      response: { text: () => 'Salah specializes in DevOps and backend engineering.' },
    });

    const req = createRequest({ message: '  Tell me about Salah   ' }, '10.0.0.6');
    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.reply).toBe('Salah specializes in DevOps and backend engineering.');
    expect(mockGenerateContent).toHaveBeenCalledWith('Tell me about Salah');
  });

  it('returns 500 when generation fails', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    mockGenerateContent.mockRejectedValue(new Error('API failure'));

    const req = createRequest({ message: 'Who is Salah?' }, '10.0.0.7');
    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBe('Assistant temporarily offline.');
    consoleSpy.mockRestore();
  });
});
