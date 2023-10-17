import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Asegúrate de haber instalado esta librería
import 'bootstrap/dist/css/bootstrap.min.css';

function IngresarFrente() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [validationError, setValidationError] = useState('');

  const createFrente = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);

    try {
      // Realiza una solicitud POST a Laravel para agregar el frente
      const response = await axios.post('http://localhost:8000/api/frentes', formData);

      Swal.fire({
        icon: 'success',
        text: response.data.message,
      });

      // Redirige a la página principal o a donde desees
      // Cambia esta línea según tus necesidades de enrutamiento
      window.location.href = '/admin/indexFrente'; // Redirige a la página principal
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setValidationError(error.response.data.errors);
      } else {
        Swal.fire({
          text: error.response ? error.response.data.message : 'Error al crear el frente',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Ingresar Frente</div>
            <div className="card-body">
              {validationError && (
                <div className="alert alert-danger">
                  <ul>
                    {Object.keys(validationError).map((key) => (
                      <li key={key}>{validationError[key]}</li>
                    ))}
                  </ul>
                </div>
              )}
              <form onSubmit={createFrente}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    name="descripcion"
                    className="form-control"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar Frente</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngresarFrente;
