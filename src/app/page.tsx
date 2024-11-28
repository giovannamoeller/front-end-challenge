'use client';

import { Character } from "@/types/Character";
import { CharactersTable } from "@/components/CharactersTable";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  async function getAllCharacters() {
    try {
      setLoading(true);
      const response = await api.fetchCharacters(1);
      setCharacters(response.results);
    } catch (err) {
      console.error('Error fetching characters:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-900 my-8 p-2">Personagens dos filmes de Star Wars</h1>
      <CharactersTable initialCharacters={characters} isLoading={loading} />
    </div>
  );
}
