import React, { useState } from 'react';
import NavButton from './components/NavButton';
import ReceivePharmacy from './components/ReceivePharmacy';
import { BUTTONS_COL1, BUTTONS_COL2, BUTTONS_COL3, BUTTONS_COL4 } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const handleNavClick = (buttonLabel: string) => {
    if (buttonLabel === "รับเวชภัณฑ์") {
      setCurrentPage('receive');
    } else {
      alert(`"${buttonLabel}" page is not yet implemented.`);
    }
  };

  if (currentPage === 'receive') {
    return <ReceivePharmacy onBack={() => setCurrentPage('main')} />;
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-500 to-blue-900 text-white overflow-hidden p-4 md:p-6 lg:p-8">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-16">
        <svg width="150" height="150" viewBox="0 0 100 100" className="opacity-80">
          <path d="M50 0 L61.2 38.8 L100 50 L61.2 61.2 L50 100 L38.8 61.2 L0 50 L38.8 38.8 Z" fill="#FFFF00" fillOpacity="0.5" />
          <path d="M50 15 L55.9 44.1 L85 50 L55.9 55.9 L50 85 L44.1 55.9 L15 50 L44.1 44.1 Z" fill="#FFFF00" fillOpacity="0.7" />
        </svg>
      </div>
      <div className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 20 180 Q 150 150 180 20" fill="none" stroke="#FFFF00" strokeWidth="60" strokeLinecap="round" />
        </svg>
      </div>
       <div className="absolute bottom-16 right-16 w-20 h-20 bg-yellow-400 rounded-full shadow-lg opacity-80" style={{ boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)' }}></div>

      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start w-full mb-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-black text-yellow-300 drop-shadow-lg" style={{ textShadow: '-2px -2px 0 #1e3a8a, 2px -2px 0 #1e3a8a, -2px 2px 0 #1e3a8a, 2px 2px 0 #1e3a8a' }}>
            โปรแกรมบริหารงานคลังเวชภัณฑ์
          </h1>
          <div className="mt-4 text-sm text-yellow-200 flex flex-col">
            <span>มีอะไรใหม่ ! โปรดอ่าน</span>
            <div className="flex items-center space-x-4">
                <span>ผู้ดูแลระบบ</span>
                <span className="text-white font-bold">99</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-4 md:mt-0 w-full md:w-auto">
          <span className="text-lg font-semibold">01/09/2568</span>
          <h2 className="text-8xl lg:text-9xl font-black bg-gradient-to-b from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl" style={{WebkitTextStroke: '1px #a16207'}}>
            Drug
          </h2>
          <span className="text-yellow-300 text-lg">&lt;Version 12.5&gt;</span>
          <div className="flex space-x-1 mt-2">
            <div className="w-8 h-4 bg-red-500"></div>
            <div className="w-8 h-4 bg-purple-500"></div>
            <div className="w-8 h-4 bg-blue-500"></div>
            <div className="w-8 h-4 bg-green-500"></div>
            <div className="w-8 h-4 bg-orange-500"></div>
            <div className="w-8 h-4 bg-yellow-400"></div>
          </div>
        </div>
      </header>
      
      <div className="relative z-10 my-6 w-full md:w-2/3 lg:w-1/2">
        <div className="relative bg-yellow-400 text-blue-900 font-bold text-xl px-6 py-2 shadow-lg">
          <span className="drop-shadow-sm">11108 : โรงพยาบาลเรณูนคร</span>
          <div className="absolute -left-2 -top-1 w-8 h-10 bg-yellow-400 transform -skew-x-12"></div>
          <div className="absolute -right-4 top-0 h-full w-16">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 80,100 0,100" fill="#FFFF00"/>
              <polygon points="80,0 100,0 80,50" fill="#facc15" />
            </svg>
          </div>
        </div>
      </div>

      <main className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8">
        <div className="flex flex-col space-y-4">
          {BUTTONS_COL1.map(label => <NavButton key={label} label={label} onClick={() => handleNavClick(label)} />)}
        </div>
        <div className="flex flex-col space-y-4">
          {BUTTONS_COL2.map(label => <NavButton key={label} label={label} onClick={() => handleNavClick(label)} />)}
        </div>
        <div className="flex flex-col space-y-4">
          {BUTTONS_COL3.map(label => <NavButton key={label} label={label} onClick={() => handleNavClick(label)} />)}
        </div>
        <div className="flex flex-col space-y-4">
          {BUTTONS_COL4.map(label => <NavButton key={label} label={label} onClick={() => handleNavClick(label)} />)}
        </div>
      </main>
    </div>
  );
};

export default App;