const productos = [  
    { 
        categoria: "notebooks",
        nombre: "Notebook Gamer",
        descripcion: "Procesador Intel i7, 16GB RAM, SSD 512GB",
        precio: 5000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_883487-MLA96787985322_112025-F.webp"
    },
    // { 
    //     categoria: "celulares",
    //     nombre: "Samsung Galaxy A15",
    //     descripcion: "128GB, Cámara principal 50mpx, cámara frontal, 13mpx",
    //     precio: 3000,
    //     imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_732595-MLA96144009639_102025-F.webp"
    // },
    { 
        categoria: "accesorios",
        nombre: "Auriculares Inálambricos",
        descripcion: "Bluetooth 5.0, cancelación de ruido",
        precio: 150,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_802305-MLA95679505222_102025-F.webp"
    },
    { 
        categoria: "accesorios",
        nombre: "Auriculares Inálambricos",
        descripcion: "Bluetooth 5.0, cancelación de ruido",
        precio: 400,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_802305-MLA95679505222_102025-F.webp"
    }
];


crearContainerCard = (categoria = "todas") => {
    const containerCard = document.querySelector(".container");
    if (!containerCard) return;
    let cantidad = 1
    
    containerCard.innerHTML = "";

    let prodFiltrados =
    categoria === "todas"? 
        productos
        : 
        productos.filter(p => p.categoria === categoria);

    if (prodFiltrados.length === 0) {
        containerCard.innerHTML = "<h3>No hay productos en esta categoría.</h3>";
        return;
    }

    prodFiltrados.forEach(prod => {
        containerCard.innerHTML += `
           <div class="card">
                <img src="${prod.imagen}" alt="${prod.nombre}">                
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h3>$${prod.precio}</h3>
                <div class="cantidad-container">
                    <button class="restar" >-</button>
                    <p id="cantidad">${cantidad}</p>
                    <button class="sumar">+</button>
                </div>
                <button>Agregar al carrito</button>
            </div> 
        `        
    });    
}

document.addEventListener("DOMContentLoaded", crearContainerCard("todas"));
