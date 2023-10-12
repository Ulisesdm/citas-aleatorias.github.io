let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');


function generarenteroAle(min,max){
    return Math.floor( Math.random() * (max-min) + min);
}
function cambiarcita(){
 let indiceAleatorio = generarenteroAle(0, citas.length);
 citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
 autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarcita();

botonElem.addEventListener('click', cambiarcita);