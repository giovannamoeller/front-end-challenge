import { Character } from "@/types/Character";
import { fetchMovie } from "@/services/api";
import { formatHeight } from "@/utils/formatHeight";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface CharacterRowProps {
  character: Character;
  onLoadingChange: (isLoading: boolean) => void;
}

export function CharacterRow({ character, onLoadingChange }: CharacterRowProps) {
  const [movies, setMovies] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function getCharacterMovies() {
    try {
      setLoading(true);
      onLoadingChange(true);
      const movies = await Promise.all(
        character.films.map(url => fetchMovie(url))
      );
      setMovies(movies);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      onLoadingChange(false);
    }
  }

  useEffect(() => {
    getCharacterMovies();
  }, [character.films]);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 border-t border-gray-200 hover:bg-gray-100">
      <h2>{character.name}</h2>
      <p>{formatHeight(character.height)}</p>
      <p>{character.starships.length}</p>
      {loading ? (
        <Skeleton/>
      ) : <p className="truncate">{movies.join(', ')}</p> }
    </div>
  );
}