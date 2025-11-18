'use client';

import { useState } from 'react';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function NewCharacterPage() {
  const [name, setName] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`${base}/api/characters`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      alert('Personnage créé ✅');
      setName('');
    } else {
      alert('Erreur ❌');
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-xl mb-4">Créer un personnage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du personnage"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Créer
        </button>
      </form>
    </main>
  );
}
