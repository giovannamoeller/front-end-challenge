import { APIResponse } from '../types/APIResponse';

const BASE_URL = 'https://swapi.dev/api';

export async function fetchCharacters(page: number = 1): Promise<APIResponse> {
  try {
    const response = await fetch(`${BASE_URL}/people/?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  } catch(error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}