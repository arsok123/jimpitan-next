'use client'

import { useEffect, useState } from 'react';
import './jimpitan.css';

interface JimpitanData {
  nama: string;
  tanggal: string;
  jumlah: string;
}

export default function JimpitanPage() {
  const [data, setData] = useState<JimpitanData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('jimpitan');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="container">
      <h1>Data Jimpitan</h1>
      {data.length === 0 ? (
        <p>Belum ada data.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>Jumlah (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.tanggal}</td>
                <td>{Number(item.jumlah).toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
