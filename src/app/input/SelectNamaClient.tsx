'use client';

import Select from 'react-select';

const options = [
  { value: 'SUPRI', label: 'SUPRI' },
  { value: 'JUWARIAH', label: 'JUWARIAH' },
  { value: 'BANI', label: 'BANI' },
  { value: 'APRIAN', label: 'APRIAN' },
  { value: 'URIP', label: 'URIP' },
];

export default function SelectNamaClient({ value, onChange }: { value: any; onChange: any }) {
  return (
    <Select
      options={options}
      placeholder="Pilih nama..."
      value={value}
      onChange={onChange}
      required
    />
  );
}
