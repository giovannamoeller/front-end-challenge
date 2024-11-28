import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";
import { CharactersTableHeader } from "./CharactersTableHeader";
import { useState, useEffect } from "react";
import { fetchCharacters } from "@/services/api";

interface CharactersTableProps {
  initialCharacters: Character[];
  isLoading: boolean;
}

export function CharactersTable({ initialCharacters, isLoading }: CharactersTableProps) {

  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMoviesCount, setLoadingMoviesCount] = useState(0);

  useEffect(() => {
    setCharacters(initialCharacters);
  }, [initialCharacters]);
  
  async function loadMoreCharacters() {
    try {
      setLoading(true);
      const response = await fetchCharacters(currentPage + 1);
      setCharacters(prevCharacters => [...prevCharacters, ...response.results]);
      setCurrentPage(prev => prev + 1);
    } catch (error) {
      console.error('Error loading more characters:', error);
    } finally {
      setLoading(false);
    }
  }

  function handleMovieLoadingState(isLoading: boolean) {
    setLoadingMoviesCount(prev => isLoading ? prev + 1 : prev - 1);
  }

  return (
    <div className="rounded-xl border border-gray-200 ">
      <CharactersTableHeader />
      {isLoading && <div className="text-center p-4">Carregando...</div>}
      {characters.map((character, index) => (
        <CharacterRow 
          key={`${character.name}-${index}`} 
          character={character}
          onLoadingChange={handleMovieLoadingState} />
      ))}
      { !isLoading && !loading && loadingMoviesCount === 0 && (
        <button 
          className="flex p-2 rounded-xl mx-auto bg-blue-100 my-4"
          onClick={loadMoreCharacters}
        >
          Carregar mais
        </button>
      )}
    </div>
  );
}