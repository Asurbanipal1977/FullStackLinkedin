"use strict"

window.addEventListener("load",()=> {

   var mensaje = ["Me cago en la leche","Me cago en to","Es un rollo"];

   console.log(esUnTimo(...mensaje));
});


function esUnTimo(mensaje1,...restomensajes)
{
    console.log(mensaje1);

    restomensajes.forEach(element => {
        console.log(`Resto Mensajes: ${element}`);
    });
}