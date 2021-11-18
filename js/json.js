$.getJSON("js/productos.json", (productos) => {
    console.log(productos);

    for (const producto of productos) {
        console.log(producto.nombre);
    }
});