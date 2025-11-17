import { card } from "./card.js";

let containerCard = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
    if (!containerCard) return;

    fetch("../../data/productos.json")
        .then(resp => resp.json())
        .then(data => {
             data.forEach(prod => {
                containerCard.innerHTML += card(prod)
                
                cantidadCompra();
            })
        })
        .catch(error => {
            console.log(error);
        })
})

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
