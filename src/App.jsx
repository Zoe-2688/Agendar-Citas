import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);

  const agregarPaciente = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario agregarPaciente={agregarPaciente} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;
