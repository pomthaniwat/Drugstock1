import React, { useState } from 'react';
import { TOP_FORM_FIELDS, TABLE_HEADERS } from '../constants';

interface ReceivePharmacyProps {
  onBack: () => void;
}

const ToolbarButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <button className={`bg-gray-200 text-black px-3 py-1 border-b-2 border-r-2 border-gray-500 hover:bg-gray-300 active:border-t-2 active:border-l-2 active:border-b-0 active:border-r-0 ${className}`}>
    {children}
  </button>
);

const FormField: React.FC<{ label: string; required?: boolean; isHighlighted?: boolean, type?: string; options?: string[]; defaultValue?: string, fullWidth?: boolean }> = ({ label, required, isHighlighted, type = 'text', options, defaultValue, fullWidth }) => (
  <td className={`p-1 border-cyan-300 border ${fullWidth ? 'colspan-2' : ''}`}>
    <label className="text-cyan-300 text-sm">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    {type === 'select' ? (
      <select className="w-full bg-yellow-100 border-none text-blue-900 p-0.5 focus:outline-none">
        {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input type="text" defaultValue={defaultValue} className={`w-full ${isHighlighted ? 'bg-cyan-200' : 'bg-yellow-100'} border-none text-blue-900 p-0.5 focus:outline-none`} />
    )}
  </td>
);

const initialRow = TABLE_HEADERS.reduce((acc, header) => ({ ...acc, [header]: '' }), { id: 1 });

const ReceivePharmacy: React.FC<ReceivePharmacyProps> = ({ onBack }) => {
  const [rows, setRows] = useState([initialRow]);

  const addRow = () => {
    setRows(prevRows => [...prevRows, { ...initialRow, id: prevRows.length + 1 }]);
  };

  return (
    <div className="bg-[#000080] min-h-screen text-white font-['Kanit'] p-2 text-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <button onClick={onBack} className="text-yellow-400 hover:text-yellow-200 font-bold">{'< BACK'}</button>
          <h1 className="border border-cyan-300 px-4 py-2 text-cyan-300">รับเวชภัณฑ์</h1>
        </div>
        <div className="flex items-center space-x-1">
          <ToolbarButton>ข้อมูลยา</ToolbarButton>
          <ToolbarButton>รายงาน</ToolbarButton>
          <ToolbarButton>รับจาก File</ToolbarButton>
          <ToolbarButton>บันทึกข้อมูล</ToolbarButton>
          <ToolbarButton>ประมวลผลรับเวชภัณฑ์</ToolbarButton>
          <ToolbarButton>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </ToolbarButton>
          <ToolbarButton>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span className="text-green-600 font-bold">+</span>
          </ToolbarButton>
        </div>
      </div>

      <div className="border border-cyan-300 p-1 mb-2">
        <table className="w-full" style={{ borderCollapse: 'collapse' }}>
          <tbody>
             <tr>
                <FormField {...TOP_FORM_FIELDS[0]} />
                <FormField {...TOP_FORM_FIELDS[1]} />
                <FormField {...TOP_FORM_FIELDS[2]} />
                <FormField {...TOP_FORM_FIELDS[3]} />
                <FormField {...TOP_FORM_FIELDS[4]} />
                <FormField {...TOP_FORM_FIELDS[5]} />
                <FormField {...TOP_FORM_FIELDS[6]} />
                <td className="p-1 border-cyan-300 border" colSpan={3}>
                    <label className="text-cyan-300 text-sm">
                        {TOP_FORM_FIELDS[7].label}<span className="text-red-500">*</span>
                    </label>
                     <select className="w-full bg-yellow-100 border-none text-blue-900 p-0.5 focus:outline-none">
                       {TOP_FORM_FIELDS[7].options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                     </select>
                </td>
             </tr>
             <tr>
                <FormField {...TOP_FORM_FIELDS[8]} />
                <FormField {...TOP_FORM_FIELDS[9]} />
                <td className="p-1 border-cyan-300 border bg-cyan-200" colSpan={2}>
                     <label className="text-blue-900 text-sm">{TOP_FORM_FIELDS[10].label}<span className="text-red-500">*</span></label>
                     <input type="text" className="w-full bg-cyan-200 border-none text-blue-900 p-0.5 focus:outline-none" />
                </td>
                 <td className="p-1 border-cyan-300 border" colSpan={5}>
                    <label className="text-cyan-300 text-sm">{TOP_FORM_FIELDS[11].label}</label>
                     <input type="text" className="w-full bg-yellow-100 border-none text-blue-900 p-0.5 focus:outline-none" />
                </td>
             </tr>
              <tr>
                <FormField {...TOP_FORM_FIELDS[12]} />
                <FormField {...TOP_FORM_FIELDS[13]} />
                <td colSpan={8} className="p-1 border-cyan-300 border"></td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900 border border-cyan-300 p-1 text-yellow-300 text-center mb-2">
        <p>รายการที่มีข้อมูลพื้นฐานแล้ว แต่ไม่แสดงรายการในการรับเวชภัณฑ์ ให้ตรวจสอบที่ ข้อมูลพื้นฐาน --&gt; ข้อมูลยา โดยต้องมีข้อมูลในช่อง "รูปแบบ" เสมอ</p>
        <p>Double click ที่ช่อง เลขทะเบียน เพื่อเปิดหน้าจอตรัสรหัสบาร์โค้ด และ รหัส TPU</p>
      </div>

      <div className="border border-cyan-300">
        <table className="w-full text-center" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="bg-blue-900">
              <th className="p-1 border-cyan-300 border-b-2 font-normal text-cyan-300"></th>
              {TABLE_HEADERS.map(header => (
                 <th key={header} className="p-1 border border-cyan-300 font-normal text-cyan-300">
                    {header.split('_').join(' ')}{['รหัสเวชภัณฑ์', 'จำนวน', 'หน่วยนับ', 'ราคา', 'วันหมดอายุ', 'LotNo.', 'TPU', 'Base_Unit'].some(h => header.startsWith(h)) && <span className="text-red-500">*</span>}
                 </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className="p-1 border border-cyan-300 text-cyan-300">{index + 1} ▶</td>
                {TABLE_HEADERS.map((header, colIndex) => (
                  <td key={`${row.id}-${header}`} className="p-0 border border-cyan-300">
                    {
                      header === 'ชื่อรพ.' || header === 'Base_Unit' ?
                      <select className="w-full h-full bg-yellow-100 border-none p-1 focus:outline-none text-blue-900">
                        <option>ไม่ได้ซื้อ</option>
                      </select> :
                      <input type="text" className={`w-full h-full ${colIndex % 3 === 0 ? 'bg-cyan-100' : 'bg-yellow-100'} p-1 border-none focus:outline-none text-blue-900`}/>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       <button onClick={addRow} className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded">
          + Add Row
        </button>
    </div>
  );
};

export default ReceivePharmacy;
