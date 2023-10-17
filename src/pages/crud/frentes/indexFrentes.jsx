import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asegúrate de que estás usando react-router para manejar las rutas
import Swal from 'sweetalert2'; // Asegúrate de que has instalado esta librería

function IndexFrente() {
  const [frentes, setFrentes] = useState([]);
  const [presidentes, setPresidentes] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchFrentes();
  }, []);

  const fetchFrentes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/frentesMain');
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

  const deleteFrente = async (id) => {
    await axios.delete(`http://localhost:8000/api/frentesDel/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          text: data.message,
        });

        fetchFrentes();
        window.location.href = '/admin/indexFrente'; // Redirige a la página principal
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: 'error',
        });
      });
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (

    <div className="container mt-5">
    <h1>Lista de Frentes</h1>
    
    <button className="btn btn-primary mr-3"
        variant="contained"
        color="primary"
        style={{
          marginBottom: '20px',
          fontSize: '16px',
        }}
        onClick={openDrawer}
      >
        Crear Presidente
      </button>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {frentes && frentes.map((frente) => (
          <tr key={frente.idFrente}>
            <td>{frente.idFrente}</td>
            <td>{frente.nombre}</td>
            <td>{frente.descripcion}</td>
            <td>
              <Link to={`/admin/EditFrente/${frente.idFrente}`} className="btn btn-sm btn-primary">
                Editar
              </Link>
              <button
                onClick={() => deleteFrente(frente.idFrente)}
                className="btn btn-sm btn-danger ml-2"
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>



  );
}

export default IndexFrente;
