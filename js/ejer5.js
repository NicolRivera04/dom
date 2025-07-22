document.getElementById('contenido').innerHTML = `
    <button id="clickMe">Click Me</button>
    <button id="removeEvent">Eliminar Evento</button>
`;

function mostrarAlerta() {
    alert("¡Botón clickeado!");
}

const botonClickMe = document.getElementById("clickMe");
const botonRemove = document.getElementById("removeEvent");

botonClickMe.addEventListener("click", mostrarAlerta);

botonRemove.addEventListener("click", () => {
    botonClickMe.removeEventListener("click", mostrarAlerta);
    alert("Evento eliminado");
});