window.onload = load;

function load(){
    cargarProductos();
    main();
    crearCarrito();
    
}

function cargarProductos() {
    var productsEl = document.getElementById("productos");
    //Productos es un array de objetos, producto, que estan declarados en el archivo JSON
    productos.forEach((producto) => {
      productsEl.innerHTML += `
            <div class="col-md-6 col-lg-4 col-xl-3 mt-2 d-flex justify-content-center">
                <div class="card m-0 h-100" style="width: 18rem;" id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <h5 class="card-title">${producto.precio}€</h5>
                    <p class="card-text" style="margin-bottom: 50px">${producto.descripcion}</p>
                    <button id="aniadirCarrito(${producto.id})" style="position: absolute; bottom: 10px;"><i class="fas fa-cart-plus"></i> Añadir al carrito</button>
                </div>
                </div>
            </div>
          `;
    });
}
