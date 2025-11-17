export const card = (data) => {
    return `
        <div class="card">
            <img src="${data.imagen}" alt="${data.nombre}">                
            <h3>${data.nombre}</h3>
            <p>${data.descripcion}</p>
            <h3>$${data.precio}</h3>
            <div class="cantidad-container">
                <button class="restar" >-</button>
                <p class="cantidad">1</p>
                <button class="sumar">+</button>
            </div>
            <button class="agregar-carrito">Agregar al carrito</button>
        </div> 
    `
}
