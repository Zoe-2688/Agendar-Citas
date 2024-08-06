import React from 'react';

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="w-full lg:w-3/5 px-4 lg:px-8">
      <h2 className="font-black text-3xl text-center mb-6 text-gray-800">Listado de Pacientes</h2>
      {pacientes.length === 0 ? (
        <p className="text-center text-gray-500">No hay pacientes registrados</p>
      ) : (
        <div className="space-y-4">
          {pacientes.map((paciente, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105"
            >
              <p className="text-lg font-semibold text-gray-700">Nombre Mascota:</p>
              <p className="text-base text-gray-600 mb-4">{paciente.mascota}</p>
              <p className="text-lg font-semibold text-gray-700">Nombre Propietario:</p>
              <p className="text-base text-gray-600 mb-4">{paciente.propietario}</p>
              <p className="text-lg font-semibold text-gray-700">Email:</p>
              <p className="text-base text-gray-600 mb-4">{paciente.email}</p>
              <p className="text-lg font-semibold text-gray-700">Alta:</p>
              <p className="text-base text-gray-600 mb-4">{paciente.alta}</p>
              <p className="text-lg font-semibold text-gray-700">Síntomas:</p>
              <p className="text-base text-gray-600">{paciente.sintomas}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
