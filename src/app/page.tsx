import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Selamat datang di Aplikasi Jimpitan</h1>
      <p>Silakan pilih menu:</p>
      <ul>
        <li><Link href="/input">Input Data</Link></li>
        <li><Link href="/jimpitan">Lihat Tabel Jimpitan</Link></li>
        <li><Link href="/statistik">Statistik</Link></li>
      </ul>
    </main>
  );
}
