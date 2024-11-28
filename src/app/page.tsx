'use client';

import { Character } from "@/types/Character";
import { CharactersTable } from "@/components/CharactersTable";
import { fetchCharacters } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  async function getAllCharacters() {
    setLoading(true);
    fetchCharacters().then((response) => {
      console.log(response);
      setCharacters(response.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-900 my-8 p-2">Personagens dos filmes de Star Wars</h1>
      <CharactersTable characters={characters} isLoading={loading} />
    </div>
  );
}
