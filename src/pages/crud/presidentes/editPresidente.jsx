import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditPresidente = () => {
  const { id } = useParams();

  const [presidente, setPresidente] = useState({
    nombre: '',
    apellido: '',
    ci: '',
    correo: '',
    libreta: '',
    idCandidato: '', // Cambia idFrente a idCandidato
  });

  const [frentes, setFrentes] = useState([]);
  const [frenteActual, setFrenteActual] = useState('');
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchPresidente();
  }, []);

  const fetchPresidente = async () => {
    await axios.get(`http://localhost:8000/api/presidentes/${id}`).then(({ data }) => {
      setPresidente(data.presidentes);
      setFrentes(data.frentes);
      setFrenteActual(data.presidente.idFrente); // Establece el frente actual

    }).catch(({ response: { data } }) => {
      Swal.fire({
        text: data.message,
        icon: 'error',
      });
    });
  };
  

  const updatePresidente = async (e) => {
    e.preventDefault();


    /*const formData = new FormData();

    formData.append('_method', 'PUT');
    formData.append('nombre', presidente.nombre);
    formData.append('apellido', presidente.apellido);
    formData.append('ci', presidente.ci);
    formData.append('correo', presidente.correo);
    formData.append('libreta', presidente.libreta);
    formData.append('idFrente', frenteActual);*/
    console.log(frenteActual);

    const presidenteActualizado = {
      nombre: presidente.nombre,
      apellido: presidente.apellido,
      ci: presidente.ci,
      correo: presidente.correo,
      libreta: presidente.libreta,
      idFrente: frenteActual,
    };

    await axios.put(`http://localhost:8000/api/presidentesUpdate/${id}`, presidenteActualizado).then(({ data }) => {
      Swal.fire({
        icon: 'success',
        text: data.message,
      });
 
    }).catch(({ response }) => {
      if (response.status === 422) {
        setValidationError(response.data.errors);
      } else {
        Swal.fire({
          text: response.data.message,
          icon: 'error',
        });
      }
    });
  };
  return (
 
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Editar Presidente</div>
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
              <form onSubmit={updatePresidente}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e) => setPresidente({ ...presidente, nombre: e.target.value })}
                    value={presidente.nombre}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    onChange={(e) => setPresidente({ ...presidente, apellido: e.target.value })}
                    value={presidente.apellido}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ci">CI</label>
                  <input
                    type="text"
                    name="ci"
                    className="form-control"
                    onChange={(e) => setPresidente({ ...presidente, ci: e.target.value })}
                    value={presidente.ci}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    onChange={(e) => setPresidente({ ...presidente, correo: e.target.value })}
                    value={presidente.correo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="libreta">Libreta</label>
                  <input
                    type="text"
                    name="libreta"
                    className="form-control"
                    onChange={(e) => setPresidente({ ...presidente, libreta: e.target.value })}
                    value={presidente.libreta}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="frente_id">Frente</label>
                  <select
                    name="frente_id"
                    className="form-control"
                    onChange={(e) => setFrenteActual( e.target.value )}
                    value={frenteActual}
                    required
                  >
                    <option value="">Seleccione un frente</option>
                    {frentes.map((frente) => (
                      <option key={frente.idFrente} value={frente.idFrente} selected={frente.idFrente === frenteActual}>
               {frente.idFrente === frenteActual ? `Frente Actual: ${frente.nombre}` : frente.nombre}
         </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Presidente</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default EditPresidente;
