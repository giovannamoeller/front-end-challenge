export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function handleAPIResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new APIError(
      `API request failed with status ${response.status}`,
      response.status,
      response
    );
  }
  return response.json();
}