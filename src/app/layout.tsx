'use client';

import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <nav className="navbar">
          <Link href="/input">Input Data</Link>
          <Link href="/jimpitan">Data Jimpitan</Link>
          <Link href="/statistik">Statistik</Link>
        </nav>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
