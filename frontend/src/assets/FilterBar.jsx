import React from 'react';

export default function FilterBar({ searchTerm, setSearchTerm, selectedType, setSelectedType }) {
  const filterOptions = ["Todos", "Servicio Social", "Becariado"];

  return (
    <div className="mb-8">
      {/* Banner de Bienvenida */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-2">
          Encuentra tu próximo Servicio Social o Becariado
        </h2>
        <p className="text-blue-100 max-w-2xl mb-6">
          Conecta directamente con empresas aliadas, postúlate con un clic y comienza a ganar experiencia profesional real.
        </p>

        {/* Input de Búsqueda */}
        <div className="flex flex-col md:flex-row gap-3 bg-white p-2 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Busca por puesto o empresa (ej. React, Python...)"
            className="flex-1 px-4 py-3 text-slate-800 outline-none rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition cursor-pointer">
            Buscar Vacantes
          </button>
        </div>
      </div>

      {/* Botones de Filtro Por Tipo */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filterOptions.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              selectedType === type
                ? "bg-slate-900 text-white shadow"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}