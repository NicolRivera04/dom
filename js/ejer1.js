document.getElementById('contenido').innerHTML = `
    <div id="info">Información importante</div>
    <p class="detalle">Texto original</p>
    <a href="#">Enlace</a>
`;

const divInfo = document.getElementById("info");
console.log(divInfo.textContent);

const detalle = document.querySelector(".detalle");
detalle.textContent = "Este es un detalle modificado";

const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => p.style.backgroundColor = "lightblue");