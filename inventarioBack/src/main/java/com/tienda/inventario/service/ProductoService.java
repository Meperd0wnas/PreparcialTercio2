package com.tienda.inventario.service;

import com.tienda.inventario.model.Producto;
import com.tienda.inventario.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor // Crea automáticamente el constructor con las dependencias
public class ProductoService {

    private final ProductoRepository productoRepository;

    // Crear producto
    public Producto crearProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    // Obtener todos los productos
    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    // Obtener producto por ID
    public Optional<Producto> obtenerPorId(String id) {
        return productoRepository.findById(id);
    }

    // Actualizar producto
    public Producto actualizarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    // Eliminar producto
    public void eliminarProducto(String id) {
        productoRepository.deleteById(id);
    }
}
