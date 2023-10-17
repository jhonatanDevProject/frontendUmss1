import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import IngresarvicePresidente from './ingresarvicePresidente';
import { useNavigate  } from 'react-router-dom';


function IndexvicePresidentes() {
  const navigate = useNavigate();
  const [vicepresidentes, setvicePresidentes] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenEdit, setDrawerOpenEdit] = useState(false);

  useEffect(() => {
    fetchPresidentes();
  }, []);

  const fetchPresidentes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/vicepresidentesMain');
      const data = response.data.vicepresidentes;
      setvicePresidentes(data);
    } catch (error) {
      console.error('Error al obtener la lista de presidentes:', error);
    }
  };

  const handleEdit = (id) => {
    // Redirigir a la página de edición con el ID del presidente
    // Por ejemplo, usando React Router DOM:
    // history.push(`/editar-presidente/${id}`);
    navigate(`/admin/EditvicePresidente/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás deshacer esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8000/api/vicepresidentesDel/${id}`);
          // Actualizar la lista de presidentes después de borrar
          fetchPresidentes();
          Swal.fire('Borrado', 'El presidente ha sido eliminado', 'success');
        } catch (error) {
          console.error('Error al borrar el presidente:', error);
          Swal.fire('Error', 'Hubo un error al borrar el presidente', 'error');
        }
      }
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
      <h2>Listado de VicePresidentes</h2>
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CI</th>
            <th>Correo</th>
            <th>Libreta</th>
            <th>Frente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vicepresidentes.map((vicepresidente) => (
            <tr key={vicepresidente.idV}>
              <td>{vicepresidente.nombre}</td>
              <td>{vicepresidente.apellido}</td>
              <td>{vicepresidente.ci}</td>
              <td>{vicepresidente.correo}</td>
              <td>{vicepresidente.libreta}</td>
              <td>{vicepresidente.nombre_frente}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEdit(vicepresidente.idV)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(vicepresidente.idV)}
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

export default IndexvicePresidentes;
