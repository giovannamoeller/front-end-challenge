import { Character } from "@/types/Character";
import { fetchMovie } from "@/services/api";
import { formatHeight } from "@/utils/formatHeight";
import { useEffect, useState } from "react";

interface CharacterRowProps {
  character: Character;
}

export function CharacterRow({ character }: CharacterRowProps) {
  const [movies, setMovies] = useState<string[]>([]);

  async function getCharacterMovies() {
    try {
      const movies = await Promise.all(
        character.films.map(url => fetchMovie(url))
      );
      setMovies(movies);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getCharacterMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 border-t border-gray-200 hover:bg-gray-100">
      <h2>{character.name}</h2>
      <p>{formatHeight(character.height)}</p>
      <p>{character.starships.length}</p>
      <p className="truncate">{movies.join(', ')}</p>
    </div>
  );
}