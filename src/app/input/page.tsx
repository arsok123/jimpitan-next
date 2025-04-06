'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DataItem = {
  nama: string;
  jumlah: number;
  tanggal: string;
};

export default function InputPage() {
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [data, setData] = useState<DataItem[]>([]);
  const [namaList, setNamaList] = useState<string[]>([]);
  const [isNamaBaru, setIsNamaBaru] = useState(false);
  const [error, setError] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [filterNama, setFilterNama] = useState('');
  const [tanggalAwal, setTanggalAwal] = useState('');
  const [tanggalAkhir, setTanggalAkhir] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('jimpitan');
    if (stored) {
      const parsed: DataItem[] = JSON.parse(stored);
      setData(parsed);
      const names = Array.from(new Set(parsed.map((item) => item.nama)));
      setNamaList(names);
    }
  }, []);

  const updateLocalStorage = (newData: DataItem[]) => {
    setData(newData);
    localStorage.setItem('jimpitan', JSON.stringify(newData));
    const names = Array.from(new Set(newData.map((item) => item.nama)));
    setNamaList(names);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!nama || !jumlah || !tanggal) {
      setError('Semua field wajib diisi.');
      return;
    }

    if (isNamaBaru && namaList.includes(nama)) {
      setError('Nama sudah ada. Pilih dari daftar atau buat nama unik.');
      return;
    }

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = { nama, jumlah: Number(jumlah), tanggal };
      updateLocalStorage(updated);
      setEditIndex(null);
      alert('Data berhasil diperbarui!');
    } else {
      const newData = [...data, { nama, jumlah: Number(jumlah), tanggal }];
      updateLocalStorage(newData);
      alert('Data berhasil ditambahkan!');
    }

    setNama('');
    setJumlah('');
    setTanggal('');
    setIsNamaBaru(false);
  };

  const handleEdit = (index: number) => {
    const item = data[index];
    setNama(item.nama);
    setJumlah(item.jumlah.toString());
    setTanggal(item.tanggal);
    setIsNamaBaru(!namaList.includes(item.nama));
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    updateLocalStorage(newData);
  };

  const filteredData = data.filter((item) => {
    const matchNama = filterNama ? item.nama === filterNama : true;
    const matchTanggal =
      (!tanggalAwal || item.tanggal >= tanggalAwal) &&
      (!tanggalAkhir || item.tanggal <= tanggalAkhir);

    return matchNama && matchTanggal;
  });

  const totalNominal = filteredData.reduce((sum, item) => sum + item.jumlah, 0);

  const getTotalPerNama = () => {
    const totals: { [key: string]: number } = {};
    data.forEach((item) => {
      if (!totals[item.nama]) {
        totals[item.nama] = 0;
      }
      totals[item.nama] += item.jumlah;
    });
    return Object.entries(totals).map(([nama, total]) => ({ nama, total }));
  };

  const chartData = {
    labels: getTotalPerNama().map((item) => item.nama),
    datasets: [
      {
        label: 'Total Jimpitan (Rp)',
        data: getTotalPerNama().map((item) => item.total),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Akumulasi Jimpitan per Nama',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Input Data Jimpitan</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={isNamaBaru}
            onChange={() => {
              setIsNamaBaru(!isNamaBaru);
              setNama('');
              setError('');
            }}
          /> Input nama baru
        </label>

        <label>
          Nama:
          {isNamaBaru ? (
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
          ) : (
            <select value={nama} onChange={(e) => setNama(e.target.value)} required>
              <option value="">-- Pilih Nama --</option>
              {namaList.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          )}
        </label>

        <label>
          Jumlah (Rp):
          <input type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} required min="0" />
        </label>

        <label>
          Tanggal:
          <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" style={{ padding: '0.5rem', backgroundColor: editIndex !== null ? 'orange' : '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          {editIndex !== null ? 'Simpan Perubahan' : 'Simpan'}
        </button>
      </form>

      <hr style={{ margin: '2rem 0' }} />

      <h2>Lihat Input Jimpitan</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <label>
          Nama:
          <select value={filterNama} onChange={(e) => setFilterNama(e.target.value)}>
            <option value="">-- Semua Nama --</option>
            {namaList.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label>
          Periode Awal:
          <input type="date" value={tanggalAwal} onChange={(e) => setTanggalAwal(e.target.value)} />
        </label>

        <label>
          Periode Akhir:
          <input type="date" value={tanggalAkhir} onChange={(e) => setTanggalAkhir(e.target.value)} />
        </label>
      </div>

      <table style={{ marginTop: '1rem', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nama</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Jumlah</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Tanggal</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.nama}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Rp {item.jumlah.toLocaleString()}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.tanggal}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)} style={{ marginLeft: '0.5rem', color: 'red' }}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 style={{ marginTop: '1rem' }}>Total Nominal: Rp {totalNominal.toLocaleString()}</h4>

      <div style={{ marginTop: '3rem' }}>
        <h2>Akumulasi Jimpitan</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
