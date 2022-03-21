var carrito = [];

function crearCarrito() {

    var carritoAnterior = JSON.parse(sessionStorage.getItem("carrito"));

    if(carritoAnterior){
        carrito = carritoAnterior;
    }

    productos.forEach(producto => {
        var id = producto.id;
        document.getElementById(`aniadirCarrito(${producto.id})`).addEventListener("click", function(){
            aniadirProducto(id);
        }, false);
    });

    
}

function aniadirProducto(id) {
    
    var yaEsta = 0;

    carrito.forEach(articulo => {
        
        if (articulo.id == id) {
                yaEsta++;
        }
    });

    if (yaEsta == 0) {
        carrito.push(productos[id]);
    }else{
        productos[id].cantidad++
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

