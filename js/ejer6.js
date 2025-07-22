document.getElementById('contenido').innerHTML = `
    <div style="margin-bottom: 10px;">
        <input type="text" id="nuevaTarea" placeholder="Escribe una tarea" style="padding: 10px; border-radius: 8px; border: none; width: 60%;">
        <button id="agregarBtn" style="padding: 10px 15px; border-radius: 8px; margin-left: 10px;">Agregar Tarea</button>
    </div>
    <div id="tareas" style="display: flex; flex-direction: column; gap: 10px;"></div>
`;

const agregarBtn = document.getElementById('agregarBtn');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const tareasDiv = document.getElementById('tareas');

agregarBtn.addEventListener('click', () => {
    const textoTarea = nuevaTareaInput.value.trim();
    if (textoTarea === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    const tareaDiv = document.createElement('div');
    tareaDiv.classList.add('tarea');
    tareaDiv.style.display = 'flex';
    tareaDiv.style.alignItems = 'center';
    tareaDiv.style.justifyContent = 'space-between';
    tareaDiv.style.padding = '10px';
    tareaDiv.style.borderRadius = '10px';
    tareaDiv.style.background = 'rgba(255, 255, 255, 0.1)';
    tareaDiv.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.4)';
    tareaDiv.style.color = 'white';
    tareaDiv.style.transition = 'background-color 0.3s ease';

    const textoSpan = document.createElement('span');
    textoSpan.textContent = textoTarea;
    textoSpan.style.flexGrow = '1';

    const checkIcon = document.createElement('span');
    checkIcon.textContent = '✔️';
    checkIcon.title = 'Marcar como realizada';
    checkIcon.style.color = 'orange';
    checkIcon.style.cursor = 'pointer';
    checkIcon.style.marginLeft = '10px';
    checkIcon.style.transition = 'color 0.3s ease';

    checkIcon.addEventListener('click', () => {
        if (checkIcon.style.color === 'orange') {
            checkIcon.style.color = 'limegreen';
            tareaDiv.style.backgroundColor = 'rgba(0, 128, 0, 0.4)';
            checkIcon.title = 'Tarea realizada';
        } else {
            checkIcon.style.color = 'orange';
            tareaDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            checkIcon.title = 'Marcar como realizada';
        }
    });

    const eliminarIcon = document.createElement('span');
    eliminarIcon.textContent = '🗑️';
    eliminarIcon.title = 'Eliminar tarea';
    eliminarIcon.style.color = 'red';
    eliminarIcon.style.cursor = 'pointer';
    eliminarIcon.style.marginLeft = '10px';
    eliminarIcon.addEventListener('click', () => {
        if (confirm('¿Estás seguro de eliminar la tarea?')) {
            tareaDiv.remove();
        }
    });

    tareaDiv.appendChild(textoSpan);
    tareaDiv.appendChild(checkIcon);
    tareaDiv.appendChild(eliminarIcon);

    tareasDiv.appendChild(tareaDiv);
    nuevaTareaInput.value = '';
});