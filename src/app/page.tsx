'use client';

import Link from 'next/link';
import React from 'react';

// ✅ Tambahkan tipe React.CSSProperties di sini
const mainStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '2rem',
  fontFamily: 'sans-serif',
  background: '#f5f5f5',
  color: '#333',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '2rem',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
};

const linkStyle: React.CSSProperties = {
  padding: '1rem 2rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
};

export default function Home() {
  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>📦 Aplikasi Jimpitan</h1>
      <p style={paragraphStyle}>Silakan pilih menu:</p>
      <ul style={listStyle}>
        <li>
          <Link href="/input" style={linkStyle}>Input Jimpitan</Link>
        </li>
        <li>
          <Link href="/lihat" style={linkStyle}>Lihat Input Jimpitan</Link>
        </li>
        <li>
          <Link href="/statistik" style={linkStyle}>Akumulasi Jimpitan</Link>
        </li>
      </ul>
    </main>
  );
}
