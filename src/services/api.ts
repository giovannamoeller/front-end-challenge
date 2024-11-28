import { Movie } from '@/types/Movie';
import { CharacterAPIResponse } from '@/types/CharacterAPIResponse';
import { API_CONFIG } from '@/config/api.config';
import { handleAPIResponse } from '../utils/api.utils';

class StarWarsAPIService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.baseURL;
  }

  private async fetchAPI<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url);
    return handleAPIResponse<T>(response);
  }

  async fetchCharacters(page: number = 1): Promise<CharacterAPIResponse> {
    return this.fetchAPI<CharacterAPIResponse>(`${API_CONFIG.endpoints.people}/?page=${page}`);
  }

  async fetchMovieById(id: string): Promise<Movie> {
    return this.fetchAPI<Movie>(`${API_CONFIG.endpoints.movies}/${id}`);
  }

  async fetchMovieByUrl(url: string): Promise<Movie> {
    const response = await fetch(url);
    return handleAPIResponse<Movie>(response);
  }
}

export const api = new StarWarsAPIService();