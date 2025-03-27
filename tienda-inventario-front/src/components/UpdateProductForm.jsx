import { useState, useEffect } from 'react';
import { obtenerProductos, actualizarProducto } from '../services/productoService';

function UpdateProductForm() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    categoria: '',
  });

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error obteniendo productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSelectChange = (e) => {
    const producto = productos.find((p) => p.id === e.target.value);
    setProductoSeleccionado(producto);
    setFormData({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: producto.cantidad,
      categoria: producto.categoria,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productoSeleccionado) {
      try {
        await actualizarProducto(productoSeleccionado.id, formData);
        alert('Producto actualizado');
        window.location.reload();
      } catch (error) {
        alert('Error al actualizar el producto');
      }
    }
  };

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <select onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>
          Selecciona un producto
        </option>
        {productos.map((producto) => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre}
          </option>
        ))}
      </select>

      {productoSeleccionado && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleChange}
          />
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={formData.cantidad}
            onChange={handleChange}
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleChange}
          />
          <button type="submit">Actualizar</button>
        </form>
      )}
    </div>
  );
}

export default UpdateProductForm;
