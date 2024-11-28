import Image from "next/image";
import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";

export default function Home() {
  const characters: Character[] = [
    {
      name: 'Luke Skywalker',
      height: 172,
      spaceships: ['X-wing', 'Imperial shuttle'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Darth Vader',
      height: 202,
      spaceships: ['TIE Advanced x1'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Han Solo',
      height: 180,
      spaceships: ['Millennium Falcon'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Leia Organa',
      height: 150,
      spaceships: ['Tantive IV', 'Millennium Falcon'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Chewbacca',
      height: 228,
      spaceships: ['Millennium Falcon'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'R2-D2',
      height: 96,
      spaceships: [],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'C-3PO',
      height: 167,
      spaceships: [],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Boba Fett',
      height: 183,
      spaceships: ['Slave 1'],
      movies: ['The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Yoda',
      height: 66,
      spaceships: [],
      movies: ['The Empire Strikes Back', 'Return of the Jedi'],
    },
    {
      name: 'Obi-Wan Kenobi',
      height: 182,
      spaceships: ['Jedi starfighter'],
      movies: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    },
  ]

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Personagens dos filmes de Star Wars</h1>
      {characters.map((character, index) => (
        <div key={index} className="flex items-center">
          <CharacterRow character={character} />
        </div>
      ))}
    </div>
  );
}
