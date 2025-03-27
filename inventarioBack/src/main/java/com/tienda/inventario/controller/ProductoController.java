package com.tienda.inventario.controller;

import com.tienda.inventario.model.Producto;
import com.tienda.inventario.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*")  // Por si luego React hace peticiones
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // POST /productos — Agregar un nuevo producto
    @PostMapping
    public Producto agregarProducto(@RequestBody Producto producto) {
        return productoService.crearProducto(producto);
    }

    // GET /productos — Listar todos los productos
    @GetMapping
    public List<Producto> obtenerTodosLosProductos() {
        return productoService.obtenerTodos();
    }

    // PUT /productos/{id} — Actualizar producto
    @PutMapping("/{id}")
    public Producto actualizarProducto(@PathVariable String id, @RequestBody Producto producto) {
        Optional<Producto> productoExistente = productoService.obtenerPorId(id);
        if (productoExistente.isPresent()) {
            Producto prod = productoExistente.get();
            prod.setNombre(producto.getNombre());
            prod.setCantidad(producto.getCantidad());
            prod.setPrecio(producto.getPrecio());
            return productoService. actualizarProducto(prod);
        } else {
            throw new RuntimeException("Producto no encontrado con id: " + id);
        }
    }

    // DELETE /productos/{id} — Eliminar producto
    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable String id) {
        productoService.eliminarProducto(id);
    }
}
