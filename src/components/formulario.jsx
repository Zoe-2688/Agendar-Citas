import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Formulario = ({ agregarPaciente }) => {
  const [formData, setFormData] = useState({
    mascota: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_p3a3qoc', 'template_bd66u07', {
      to_name: formData.email,
      from_name: 'Veterinaria ZMS',
      mascota: formData.mascota,
      propietario: formData.propietario,
      email: formData.email,
      alta: formData.alta,
      sintomas: formData.sintomas
    }, 'jdBfL69tUbYrH3bJQ')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Paciente agregado y correo enviado exitosamente.');

        // Agregar el paciente al estado de App
        agregarPaciente(formData);

        // Limpiar el formulario
        setFormData({
          mascota: '',
          propietario: '',
          email: '',
          alta: '',
          sintomas: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        alert('Error al enviar el correo. Verifique la consola para más detalles.');
      });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-700 font-bold">Administrarlos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id="mascota"
            type="text"
            value={formData.mascota}
            onChange={handleChange}
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id="propietario"
            type="text"
            value={formData.propietario}
            onChange={handleChange}
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            id="alta"
            type="date"
            value={formData.alta}
            onChange={handleChange}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea
            id="sintomas"
            value={formData.sintomas}
            onChange={handleChange}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
}

export default Formulario;
