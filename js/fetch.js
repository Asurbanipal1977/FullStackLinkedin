"use strict"


window.addEventListener("load", carga);

var boton, banderas, post, mensajes;

function carga() 
{
    boton = document.getElementById("boton");
    banderas = document.getElementById("banderas");
    post = document.getElementById("post");
    mensajes = document.getElementById("mensajes");

    var tienda = {
        nombre: "dsfdsfdsfsd",
        saludar: function() {
           var mensaje = "Hola " + this.nombre;
           return mensaje;
        }
      };

      alert(tienda.saludar());

    boton.addEventListener("click", () => {
        getDatos()
        .then(data => data.json()) 
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json()) 
        .then(countries => 
        {
            mostrarBanderas(countries);
        })
        .catch(e => {
            mensajes.classList.toggle('hide');
            mensajes.innerHTML=e;
        });
    });
}

function getCountries()
{
    return fetch("https://restcountries.com/v3.1/all");
}

function getDatos()
{
    return fetch("https://jsonplaceholder.typicode.com/posts");
}


function mostrarDatos(posts){
    posts.innerHTML = "";
    posts.map((value, index) => {
        let h1 = document.createElement("h1");
        let p = document.createElement("p");

        h1.innerHTML = `${index+1} -  ${value.title}`;
        p.innerHTML = `${value.body}`;
        post.appendChild(h1);
        post.appendChild(p);
    });
}

function mostrarBanderas(countries)
{
    banderas.innerHTML = "";
    countries.map((value, index) => {
        let bandera = document.createElement("img");
        bandera.src = value.flags.png;
        bandera.width="20";
        bandera.height="20";
        banderas.appendChild(bandera);
    });
}

