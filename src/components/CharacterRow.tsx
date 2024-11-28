import { Character } from "@/types/Character";
import { Movie } from "@/types/Movie";
import { api } from "@/services/api";
import { formatHeight } from "@/utils/formatHeight";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

interface CharacterRowProps {
  character: Character;
  onLoadingChange: (isLoading: boolean) => void;
}

export function CharacterRow({ character, onLoadingChange }: CharacterRowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  async function getCharacterMovies() {
    try {
      setLoading(true);
      onLoadingChange(true);
      const movies = await Promise.all(
        character.films.map(url => api.fetchMovieByUrl(url))
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
      ) : <p className="truncate">{movies.map(movie => movie.title).join(', ')}</p> }
    </div>
  );
}