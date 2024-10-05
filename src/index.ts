const abrirModalBoton = document.getElementById('abrirModal') as HTMLButtonElement;
const cerrarModalBoton = document.getElementById('cerrarModalBoton') as HTMLSpanElement;
const modalTarea = document.getElementById('modalTarea') as HTMLElement;
const InputTarea = document.getElementById('InputTarea') as HTMLInputElement;
const agregarTareaBoton = document.getElementById('agregarTareaBoton') as HTMLButtonElement;
const listaTareas = document.getElementById('listaTareas') as HTMLUListElement;

//Funcion para abrir el modal.
const abrirModal = (): void => {
    modalTarea.style.display = 'block';
};

//Funcion para cerrar modal
const cerrarModal = (): void => {
    modalTarea.style.display = 'none';
};

//Funcion para añadir una tarea nueva.
const agregarTarea = (): void => {
    const textoTarea = InputTarea.value;

    if(textoTarea){
        const item__Lista = document.createElement("li");
        item__Lista.classList.add();
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
window.addEventListener('click', (event: MouseEvent) => {
    if(event.target === modalTarea){
        cerrarModal();
    }
});