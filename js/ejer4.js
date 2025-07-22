document.getElementById('contenido').innerHTML = `
    <div id="original">Este es el div original</div>
`;

const divOriginal = document.querySelector('#contenido div');

const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo div';

divOriginal.parentNode.replaceChild(nuevoDiv, divOriginal);

console.log("Div reemplazado correctamente:", nuevoDiv.outerHTML);