"use strict";
const abrirModalBoton = document.getElementById('abrirModal');
const cerrarModalBoton = document.getElementById('cerrarModalBoton');
const modalTarea = document.getElementById('modalTarea');
const InputTarea = document.getElementById('InputTarea');
const agregarTareaBoton = document.getElementById('agregarTareaBoton');
const listaTareas = document.getElementById('listaTareas');
//Funcion para abrir el modal.
const abrirModal = () => {
    modalTarea.style.display = 'block';
};
//Funcion para cerrar modal
const cerrarModal = () => {
    modalTarea.style.display = 'none';
};
//Funcion para añadir una tarea nueva.
const agregarTarea = () => {
    const textoTarea = InputTarea.value;
    if (textoTarea) {
        const item__Lista = document.createElement("li");
        item__Lista.textContent = textoTarea;
        listaTareas.appendChild(item__Lista);
        InputTarea.value = '';
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
