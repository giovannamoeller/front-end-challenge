import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";
import { CharactersTableHeader } from "./CharactersTableHeader";

interface CharactersTableProps {
  characters: Character[];
  isLoading: boolean;
}

export function CharactersTable({ characters, isLoading }: CharactersTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 ">
      <CharactersTableHeader />
      {isLoading && <div className="text-center p-4">Carregando...</div>}
      {characters.map((character, index) => (
        <CharacterRow key={`${character.name}-${index}`} character={character} />
      ))}
    </div>
  );
}