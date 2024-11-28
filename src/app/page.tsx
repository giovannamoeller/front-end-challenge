'use client';

import { Character } from "@/types/Character";
import { CharacterRow } from "@/components/CharacterRow";
import { fetchCharacters } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {

  const [characters, setCharacters] = useState<Character[]>([]);

  async function getAllCharacters() {
    fetchCharacters().then((response) => {
      console.log(response);
      setCharacters(response.results);
    });
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

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
