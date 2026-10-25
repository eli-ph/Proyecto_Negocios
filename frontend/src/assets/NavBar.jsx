import React from 'react';

export default function Navbar({ userName = "Estudiante", userInitials = "EP" }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Título */}
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <span>🎓</span> ConectaTalento
        </h1>

        {/* Info del usuario */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-600">
            Hola, {userName}
          </span>
          <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}