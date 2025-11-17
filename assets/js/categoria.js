import { card } from "./card.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container");
    if (!container) return;

    //Detectar categoría según el archivo actual
    const filename = window.location.pathname.split("/").pop();
    const categoria = filename.replace(".html", "");

    fetch("../../data/productos.json")
        .then(resp => resp.json())
        .then(data => {

            const productosFiltrados = data.filter(prod => prod.categoria === categoria);

            if (productosFiltrados.length === 0) {
                container.innerHTML = `<p>No hay productos en esta categoría.</p>`;
                return;
            }

            productosFiltrados.forEach((prod, index) => {
                container.innerHTML += card(prod, index);
            });
            
            /* Agrega eventos sumar y restar */
            cantidadCompra();

        })
        .catch(error => console.log(error));
});

const cantidadCompra = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const btnSumar = card.querySelector(".sumar");
        const btnRestar = card.querySelector(".restar");
        const cantidadElem = card.querySelector(".cantidad");

        let cantidad = 1;

        btnSumar.addEventListener("click", () => {
            cantidad++;
            cantidadElem.textContent = cantidad;
        });

        btnRestar.addEventListener("click", () => {
            if (cantidad > 1) {
                cantidad--;
                cantidadElem.textContent = cantidad;
            }
        });
    });
};