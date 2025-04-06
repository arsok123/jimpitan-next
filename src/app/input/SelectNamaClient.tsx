'use client';

import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'SUPRI', label: 'SUPRI' },
  { value: 'JUWARIAH (RATIH)', label: 'JUWARIAH (RATIH)' },
  { value: 'BANIYANTO', label: 'BANIYANTO' },
  { value: 'APRIAN', label: 'APRIAN' },
  { value: 'PURWO TJAHYO', label: 'PURWO TJAHYO' },
  { value: 'TOTOK', label: 'TOTOK' },
  { value: 'DARMAN', label: 'DARMAN' },
  { value: 'MUH ZANI', label: 'MUH ZANI' },
  { value: 'JAROT', label: 'JAROT' },
  { value: 'HARJANTO', label: 'HARJANTO' },
  { value: 'TRIYANI', label: 'TRIYANI' },
  { value: 'TATANG', label: 'TATANG' },
  { value: 'WAHYU', label: 'WAHYU' },
  { value: 'SUKADIR', label: 'SUKADIR' },
  { value: 'SLAMET WIDODO (Jefri)', label: 'SLAMET WIDODO (Jefri)' },
  { value: 'JOKO', label: 'JOKO' },
  { value: 'RIAN', label: 'RIAN' },
  { value: 'DIAN', label: 'DIAN' },
  { value: 'WIDODO', label: 'WIDODO' },
  { value: 'WAHUDI', label: 'WAHUDI' },
  { value: 'SAMIYONO', label: 'SAMIYONO' },
  { value: 'WINDARTO', label: 'WINDARTO' },
  { value: 'TEGUH', label: 'TEGUH' },
  { value: 'PRIHWATI', label: 'PRIHWATI' },
  { value: 'RIKY', label: 'RIKY' },
  { value: 'HARIYANTO', label: 'HARIYANTO' },
  { value: 'SATMOKO', label: 'SATMOKO' },
  { value: 'SUKO HARTO', label: 'SUKO HARTO' },
  { value: 'DARTO (LAS)', label: 'DARTO (LAS)' },
  { value: 'SURANDI', label: 'SURANDI' },
  { value: 'HARSONO', label: 'HARSONO' },
  { value: 'WALIYEM', label: 'WALIYEM' },
  { value: 'BAYU', label: 'BAYU' },
  { value: 'PARJIYANTO', label: 'PARJIYANTO' },
  { value: 'CIPTO (Darni)', label: 'CIPTO (Darni)' },
  { value: 'PARMI MAMAN', label: 'PARMI MAMAN' },
  { value: 'PARYANTO', label: 'PARYANTO' },
  { value: 'DARYANTO', label: 'DARYANTO' },
  { value: 'DWI', label: 'DWI' },
  { value: 'SUDARMIN', label: 'SUDARMIN' },
  { value: 'SUKIMAN', label: 'SUKIMAN' },
  { value: 'SUYAMTO (IGUK)', label: 'SUYAMTO (IGUK)' },
  { value: 'SALIMI', label: 'SALIMI' },
  { value: 'YULIANWAR', label: 'YULIANWAR' },
  { value: 'URIP', label: 'URIP' },
];

export default function SelectNamaClient({ value, onChange }: any) {
  return (
    <CreatableSelect
      options={options}
      placeholder="Pilih atau ketik nama baru..."
      value={value}
      onChange={onChange}
      instanceId="nama-select"
      isClearable
      required
    />
  );
}
