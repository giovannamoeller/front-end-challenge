import { Character } from "./Character";

export interface APIResponse {
  count: number;
  next: string;
  previous: string;
  results: [Character];
}