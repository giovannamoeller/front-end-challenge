import { Movie } from '@/types/Movie';
import { CharacterAPIResponse } from '@/types/CharacterAPIResponse';
import { API_CONFIG } from '@/config/api.config';

async function fetchCharacters(page: number = 1): Promise<CharacterAPIResponse> {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/people/?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  } catch(error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}

async function fetchMovie(url: string): Promise<Movie> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie');
    }
    return response.json();
  } catch(error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
}

export { fetchCharacters, fetchMovie };