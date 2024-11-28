import { CharacterAPIResponse } from '@/types/APIResponse';

const BASE_URL = 'https://swapi.dev/api';

async function fetchCharacters(page: number = 1): Promise<CharacterAPIResponse> {
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

async function fetchMovie(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie');
    }
    const data = await response.json();
    return data.title;
  } catch(error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
}

export { fetchCharacters, fetchMovie };