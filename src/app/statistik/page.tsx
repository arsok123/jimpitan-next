'use client';

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function StatistikPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('jimpitan');
    if (stored) setData(JSON.parse(stored));
  }, []);

  const totalPerOrang = data.reduce((acc, item) => {
    acc[item.nama] = (acc[item.nama] || 0) + Number(item.jumlah);
    return acc;
  }, {} as Record<string, number>);

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Jimpitan");
    XLSX.writeFile(wb, "jimpitan.xlsx");
  };

  const exportPDF = async () => {
    const element = document.getElementById("export-area");
    if (!element) return;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save("jimpitan.pdf");
  };

  return (
    <div>
      <h1>Statistik Jimpitan</h1>
      <div id="export-area">
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Total Jimpitan</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(totalPerOrang).map(([nama, total]) => (
              <tr key={nama}>
                <td>{nama}</td>
                <td>{Number(total).toLocaleString('id-ID')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <button onClick={exportExcel}>Export Excel</button>
      <button onClick={exportPDF}>Export PDF</button>
    </div>
  );
}
