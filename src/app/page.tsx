import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
      color: '#333',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Selamat Datang di Aplikasi Jimpitan</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Silakan pilih menu:</p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        gap: '1.5rem',
        flexDirection: 'column',
      }}>
        <li>
          <Link href="/input" style={linkStyle}>📝 Input Data</Link>
        </li>
        <li>
          <Link href="/jimpitan" style={linkStyle}>📋 Lihat Tabel Jimpitan</Link>
        </li>
        <li>
          <Link href="/statistik" style={linkStyle}>📊 Statistik</Link>
        </li>
      </ul>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  backgroundColor: '#0070f3',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  fontWeight: 'bold',
  transition: 'background-color 0.2s',
  display: 'inline-block',
};

