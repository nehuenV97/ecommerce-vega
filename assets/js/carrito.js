document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carrito");
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        container.innerHTML = `<div class="carrito-item"><h2>El carrito está vacío.</h2></div>`;
        return;
    }

    carrito.forEach(item => {
        const cardItem = document.createElement("div");
        cardItem.classList.add("carrito-item");

        cardItem.innerHTML = `
                <h3>${item.nombre}</h3>            
                <div class="info">
                    <h4>Precio: $${item.precio}</h4>
                    <h4>Cantidad: ${item.cantidad}</h4>
                    <h4>Subtotal: $${item.precio * item.cantidad}</h4>
                    <button class="btn-borrar"><i class="bi bi-trash icono"></i></button>
                </div>
               
        `;       

        // eliminar producto del carrito
        cardItem.querySelector(".btn-borrar").addEventListener("click", () => {
            eliminarDelCarrito(item.id);
        });

        container.appendChild(cardItem);
    });
    actualizarTotal()    
});

const eliminarDelCarrito = (id) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
}

const actualizarTotal = () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    document.querySelector("#total").textContent = total;
};