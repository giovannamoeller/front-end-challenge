import { Character } from "@/types/Character";

interface CharacterRowProps {
  character: Character;
}

export function CharacterRow({ character }: CharacterRowProps) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 border-t border-gray-200 hover:bg-gray-100">
      <h2>{character.name}</h2>
      <p>{character.height} cm</p>
      <p>{character.spaceships.length}</p>
      <p className="truncate">{character.movies.join(', ')}</p>
    </div>
  );
}