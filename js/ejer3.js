document.getElementById('contenido').innerHTML = `
    <p>Parrafo existente</p>
    <button id="eliminar">Eliminar primer párrafo</button>
`;

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo creado dinámicamente";
document.body.appendChild(nuevoParrafo);

document.querySelector("#eliminar").addEventListener("click", () => {
    const primerParrafo = document.querySelector("p");
    if (primerParrafo) primerParrafo.remove();
});