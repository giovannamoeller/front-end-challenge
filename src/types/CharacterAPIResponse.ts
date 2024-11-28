import { Character } from "./Character";

export interface CharacterAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}