
import React from 'react';

interface NavButtonProps {
  label: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group w-full text-lime-300 font-bold py-3 px-4 rounded-full shadow-lg overflow-hidden border-2 border-blue-400/50 hover:border-blue-300/70 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-100"
    >
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-800 opacity-90 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Top Shine/Gloss Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full opacity-80 group-hover:from-white/40 transition-all duration-300"
      ></div>

      {/* Text Content */}
      <span className="relative z-10 drop-shadow-md">{label}</span>

      {/* Inner shadow effect on bottom */}
       <div className="absolute bottom-0 left-0 w-full h-full rounded-full shadow-[inset_0_-8px_15px_rgba(0,0,50,0.3)]"></div>
    </button>
  );
};

export default NavButton;
