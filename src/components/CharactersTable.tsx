import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";

interface CharactersTableProps {
  characters: Character[];
}

export function CharactersTable({ characters }: CharactersTableProps) {
  return (
    <div>
      {characters.map((character, index) => (
        <CharacterRow key={`${character.name}-${index}`} character={character} />
      ))}
    </div>
  );
}