import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";
import { CharactersTableHeader } from "./CharactersTableHeader";

interface CharactersTableProps {
  characters: Character[];
}

export function CharactersTable({ characters }: CharactersTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 ">
      <CharactersTableHeader />
      {characters.map((character, index) => (
        <CharacterRow key={`${character.name}-${index}`} character={character} />
      ))}
    </div>
  );
}