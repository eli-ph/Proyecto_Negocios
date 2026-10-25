import React from 'react';

export default function VacancyCard({ vacancy, onApply }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        {/* Encabezado de la Tarjeta */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl">
            {vacancy.logo}
          </div>
          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold ${
              vacancy.type === "Becariado"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {vacancy.type}
          </span>
        </div>

        {/* Título y Empresa */}
        <h3 className="text-lg font-bold text-slate-900 mb-1">{vacancy.title}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3">{vacancy.company}</p>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{vacancy.description}</p>

        {/* Requisitos / Requerimientos */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {vacancy.requirements.map((req, index) => (
            <span
              key={index}
              className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Pie de la tarjeta */}
      <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 block">Compensación</span>
          <span className="text-xs font-bold text-slate-700">{vacancy.stipend}</span>
        </div>
        <button
          onClick={() => onApply(vacancy.company)}
          className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition cursor-pointer"
        >
          Postularme
        </button>
      </div>
    </div>
  );
}