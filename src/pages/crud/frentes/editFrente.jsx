import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Asegúrate de que estás usando react-router para manejar las rutas

function EditFrente() {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos del frente con el ID especificado
    axios.get(`http://localhost:8000/api/frentes/${id}`)
      .then((response) => {
        const frenteData = response.data.frente;
        setNombre(frenteData.nombre);
        setDescripcion(frenteData.descripcion);
      })
      .catch((error) => {
        setError('Frente no encontrado');
      });
  }, [id]);

  const updateFrente = async (e) => {
    e.preventDefault();

    const frente = {
      nombre: nombre,
      descripcion: descripcion
    };

    try {
      // Realiza una solicitud PUT a Laravel para actualizar el frente
      const response = await axios.put(`http://localhost:8000/api/frentesUpdate/${id}`, frente);

      // Redirige a la página principal o a donde desees después de la actualización
      // Cambia esta línea según tus necesidades de enrutamiento
      window.location.href = '/'; // Redirige a la página principal
    } catch (error) {
      setError('Algo salió mal al actualizar el frente');
    }
  };

  return (
  
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Editar Frente</div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={updateFrente}>
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
                <button type="submit" className="btn btn-primary">Actualizar Frente</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default EditFrente;
