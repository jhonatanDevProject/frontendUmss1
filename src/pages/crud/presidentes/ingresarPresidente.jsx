import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function IngresarPresidente() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [ci, setCI] = useState('');
    const [correo, setCorreo] = useState('');
    const [libreta, setLibreta] = useState('');
    const [frenteId, setFrenteId] = useState('');
    const [frentes, setFrentes] = useState([]);
    const [validationError, setValidationError] = useState({});

    useEffect(() => {
        fetchFrentes();
      }, []);

    const fetchFrentes = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/listaFrentes');
          const data = response.data;
          
          if (Array.isArray(data.frentes)) {
            setFrentes(data.frentes);
          } else {
            console.error('La respuesta no contiene un arreglo de frentes válido');
          }
        } catch (error) {
          console.error(error);
        }
      };
    


    const createPresidente = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();

        formData.append('nombre', nombre);
        formData.append('apellido', apellido);
        formData.append('ci', ci);
        formData.append('correo', correo);
        formData.append('libreta', libreta);
        formData.append('frente_id', frenteId);
    
        try {
          // Realiza una solicitud POST a Laravel para agregar el frente
          const response = await axios.post('http://localhost:8000/api/presidentes', formData);
    
          Swal.fire({
            icon: 'success',
            text: response.data.message,
          });
    
          // Redirige a la página principal o a donde desees
          // Cambia esta línea según tus necesidades de enrutamiento
          window.location.href = '/admin/indexPresidente'; // Redirige a la página principal
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
            <div className="card-header bg-primary text-white">Ingresar Presidente</div>
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
              <form onSubmit={createPresidente}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ci" className="form-label">CI</label>
                  <input
                    type="text"
                    name="ci"
                    className="form-control"
                    onChange={(e) => setCI(e.target.value)}
                    value={ci}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="libreta" className="form-label">Libreta</label>
                  <input
                    type="text"
                    name="libreta"
                    className="form-control"
                    onChange={(e) => setLibreta(e.target.value)}
                    value={libreta}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="frenteId" className="form-label">Frente</label>
                  <select
                    name="frenteId"
                    className="form-control"
                    onChange={(e) => setFrenteId(e.target.value)}
                    value={frenteId}
                    required
                  >
                    
                    <option value="">Seleccionar Frente</option>
                      {frentes.map((frente) => (
                        <option key={frente.idFrente} value={frente.idFrente}>
                          {frente.nombre}
                        </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Ingresar Presidente</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngresarPresidente;
