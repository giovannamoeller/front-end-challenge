import { Character } from "./Character";

export interface CharacterAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}