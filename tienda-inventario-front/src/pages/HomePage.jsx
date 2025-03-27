import { useEffect, useState } from 'react';
import { obtenerProductos, eliminarProducto } from '../services/productoService';

function HomePage() {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    const data = await obtenerProductos();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleEliminar = async (id) => {
    await eliminarProducto(id);
    fetchProductos(); // recarga la lista después de eliminar
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - {producto.categoria} - ${producto.precio} - Cantidad: {producto.cantidad}
              <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default HomePage;
