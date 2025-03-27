import axios from 'axios';
const API_URL = 'http://localhost:8080/productos';

// Obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};

// Eliminar un producto por ID
export const eliminarProducto = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
};


export const actualizarProducto = async (id, producto) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, producto, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    throw error;
  }
};





