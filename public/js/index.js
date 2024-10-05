"use strict";
const abrirModalBoton = document.getElementById('abrirModal');
const cerrarModalBoton = document.getElementById('cerrarModalBoton');
const modalTarea = document.getElementById('modalTarea');
const InputArea = document.getElementById('InputTarea');
const agregarTareaBoton = document.getElementById('agregarTareaBoton');
const listaTareas = document.getElementById('listaTareas');
//Funcion para abrir el modal.
const abrirModal = () => {
    modalTarea.style.display = 'flex';
};
//Funcion para cerrar modal
const cerrarModal = () => {
    modalTarea.style.display = 'none';
};
//Funcion para añadir una tarea nueva.
//Agregar un limite de caracteres para le nombre.
//Agregar textArea.
let contador = 0;
const agregarTarea = () => {
    const textoTarea = InputArea.value;
    contador++;
    if (textoTarea) {
        const item__Lista = document.createElement("div");
        const item__Lista__separador = document.createElement("div");
        const item__Lista__text = document.createElement("p");
        const icon__borrar = document.createElement("i");
        const icon__editar = document.createElement("i");
        //texto
        item__Lista__text.textContent = textoTarea;
        //clases
        item__Lista.classList.add("modal__elemento");
        item__Lista__separador.classList.add("modal__separador");
        icon__borrar.className = "fa-solid fa-trash icon__task";
        icon__editar.className = "fa-solid fa-pencil icon__task";
        //Id
        item__Lista.id = `tarea__${contador}`;
        //Borrar Modal
        icon__borrar.addEventListener("click", (e) => {
            e.stopPropagation();
            item__Lista.remove();
        });
        //agregar
        listaTareas.appendChild(item__Lista);
        item__Lista.appendChild(item__Lista__text);
        item__Lista.appendChild(item__Lista__separador);
        item__Lista__separador.appendChild(icon__borrar);
        item__Lista__separador.appendChild(icon__editar);
        InputArea.value = ' ';
        cerrarModal();
    }
};
//Asociar Eventos
abrirModalBoton.addEventListener('click', abrirModal);
cerrarModalBoton.addEventListener('click', cerrarModal);
agregarTareaBoton.addEventListener('click', agregarTarea);
//Cerra el modal si se hace click fuera de el.
window.addEventListener('click', (event) => {
    if (event.target === modalTarea) {
        cerrarModal();
    }
});
//Abrir modales.
const tarea__titulo = document.getElementById("tarea__titulo");
listaTareas.addEventListener("click", () => {
    tarea__titulo.textContent = InputArea.value;
});
//Editar modales.
//Usar memoria javascript.
