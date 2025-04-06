'use client';

import './input.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import SelectNamaClient from './SelectNamaClient';

export default function InputPage() {
  const router = useRouter();

  const [nama, setNama] = useState<any>(null);
  const [tanggal, setTanggal] = useState('');
  const [jumlah, setJumlah] = useState('');

  // Optional: pastikan localStorage hanya dipanggil di client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newData = {
      nama: nama?.value || '',
      tanggal,
      jumlah,
    };

    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('jimpitan') || '[]');
      existing.push(newData);
      localStorage.setItem('jimpitan', JSON.stringify(existing));
    }

    router.push('/jimpitan');
  };

  return (
    <main className="container">
      <div className="form-box">
        <h1>INPUT DATA JIMPITAN</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="select-nama">Nama</label>
          <SelectNamaClient value={nama} onChange={setNama} />

          <label htmlFor="tanggal">Tanggal</label>
          <input
            id="tanggal"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
          />

          <label htmlFor="jumlah">Jumlah (Rp)</label>
          <input
            id="jumlah"
            type="number"
            placeholder="Contoh: 2000"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            required
          />

          <button type="submit">Simpan</button>
        </form>
      </div>
    </main>
  );
}
