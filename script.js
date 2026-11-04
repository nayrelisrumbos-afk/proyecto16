// Busco los elementos del HTML que voy a usar
const botonDesplegable = document.getElementById("botonDesplegable");
const listaOpciones = document.getElementById("listaOpciones");
const textoBoton = document.getElementById("textoBoton");
const mensaje = document.getElementById("mensaje");
const opciones = document.querySelectorAll(".opcion");

//  ESTADO ABIERTO o CERRADO Abre o cierra el menú al hacer clic en el botón principal
botonDesplegable.addEventListener("click", function () {
    // Si la lista está oculta la muestra. Si está visible la oculta
    if (listaOpciones.hidden == true) {
        listaOpciones.hidden = false;
    } else {
        listaOpciones.hidden = true;
    }
});

// ESTADO SELECCIONADO Cuando el usuario hace clic en una opción de la lista
opciones.forEach(function (opcion) {
    opcion.addEventListener("click", function () {
        
        // Guardo el nombre de la tortuga y su descripción
        const tortugaElegida = opcion.textContent;
        const descripcion = opcion.dataset.descripcion;

        // Pongo el nombre de la tortuga en el botón principal
        textoBoton.textContent = tortugaElegida;

        // Le quito el color lila a todas las opciones
        opciones.forEach(function (elemento) {
            elemento.classList.remove("seleccionada");
        });

        // Le pongo el color lila SOLO a la opción que acabo de elegir
        opcion.classList.add("seleccionada");

        // Muestro la descripción en la cajita de abajo
        mensaje.textContent = descripcion;

        // Cierro el menú automáticamente después de elegir
        listaOpciones.hidden = true;
    });
});

//  CERRAR AL HACER CLIC AFUERA Si el usuario hace clic por fuera del menú, se cierra
document.addEventListener("click", function (evento) {
    // Si el clic NO fue dentro de la clase desplegable cerramos la lista
    if (!evento.target.closest(".desplegable")) {
        listaOpciones.hidden = true;
    }
});-p