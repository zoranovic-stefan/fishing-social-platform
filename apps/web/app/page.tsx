'use client';

import { useEffect, useState } from 'react';

interface Catch {
  id: number;
  species: string;
  lengthCm: number;
  weightKg: number;
}

export default function Home() {
  const [catches, setCatches] = useState<Catch[]>([]);

  useEffect(() => {
    async function fetchCatches() {
      try {
        const response = await fetch('http://localhost:8000/api/catches');

        if (!response.ok) {
          throw new Error('Failed to fetch catches');
        }

        const data: Catch[] = await response.json();
        setCatches(data);
      } catch (error) {
        console.error('Error fetching catches:', error);
      }
    }
    fetchCatches();
  }, []);
  
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-2 text-3xl font-bold">
        My Fishing Catches
      </h1>
  
      <p className="mb-6 text-gray-500">
        {catches.length} recorded catches
      </p>
  
      <div className="space-y-4">
        {catches.map((fish) => (
          <div
            key={fish.id}
            className="rounded-xl border p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {fish.species}
            </h2>
  
            <p>Length: {fish.lengthCm} cm</p>
            <p>Weight: {fish.weightKg} kg</p>
          </div>
        ))}
      </div>
    </main>
  );
}