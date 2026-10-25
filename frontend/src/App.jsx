import React, { useState } from 'react';
import Navbar from './assets/NavBar';
import FilterBar from './assets/FilterBar';
import VacancyCard from './assets/VacancyCard';

// Datos estáticos de prueba (después estos vendrán desde tu Backend en Express)
const mockVacancies = [
  {
    id: 1,
    company: "Tech Solutions México",
    logo: "💻",
    title: "Desarrollador Frontend React (Becario)",
    type: "Becariado",
    location: "Híbrido (CDMX)",
    stipend: "$6,000 MXN / mes",
    description: "Buscamos estudiantes de ingeniería en computación para apoyo en el desarrollo de interfaces web con React y Tailwind.",
    requirements: ["React.js", "JavaScript", "Git", "Medio tiempo"]
  },
  {
    id: 2,
    company: "Innovación Pública S.A.",
    logo: "🏛️",
    title: "Analista de Datos y Soporte (Servicio Social)",
    type: "Servicio Social",
    location: "Remoto",
    stipend: "Liberación de Servicio + Apoyo de transporte",
    description: "Ideal para liberar servicio social apoyando en la optimización de bases de datos y scripts de automatización en Python.",
    requirements: ["Python", "Bases de datos", "Disponibilidad matutina"]
  },
  {
    id: 3,
    company: "Global Data Systems",
    logo: "🌐",
    title: "Tester QA Junior (Becario)",
    type: "Becariado",
    location: "Presencial",
    stipend: "$8,000 MXN / mes",
    description: "Participa en el aseguramiento de calidad de software y pruebas automatizadas para proyectos internacionales.",
    requirements: ["Pruebas de software", "Lógica de programación", "Inglés intermedio"]
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");

  // Filtrado dinámico
  const filteredVacancies = mockVacancies.filter(vacancy => {
    const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          vacancy.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "Todos" || vacancy.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleApply = (companyName) => {
    alert(`¡Postulación enviada a ${companyName}!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Navbar */}
      <Navbar userName="Elizabeth" userInitials="EP" />

      {/* 2. Contenedor Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* 3. Filtros y Búsqueda */}
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedType={selectedType} 
          setSelectedType={setSelectedType} 
        />

        {/* 4. Mapeo de Tarjetas de Vacantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVacancies.map((vacancy) => (
            <VacancyCard 
              key={vacancy.id} 
              vacancy={vacancy} 
              onApply={handleApply} 
            />
          ))}
        </div>

        {/* Estado si no hay coincidencias */}
        {filteredVacancies.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 mt-4">
            <p className="text-slate-400 text-lg">
              No se encontraron vacantes con los filtros seleccionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}