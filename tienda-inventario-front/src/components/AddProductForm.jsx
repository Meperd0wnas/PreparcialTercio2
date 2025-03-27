import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    categoria: "",
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/productos", {
        ...producto,
        precio: parseFloat(producto.precio),
        cantidad: parseInt(producto.cantidad),
      });
      alert("Producto agregado con éxito");
      setProducto({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        categoria: "",
      });
    } catch (error) {
      alert("Error al agregar el producto");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={producto.nombre}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={producto.descripcion}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={producto.precio}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="cantidad"
        placeholder="Cantidad"
        value={producto.cantidad}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={producto.categoria}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProductForm;
