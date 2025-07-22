document.getElementById('contenido').innerHTML = `
    <h2 class="titulo">Título Original</h2>
    <a href="#">Enlace</a>
`;

const enlace = document.getElementsByTagName("a")[0];
enlace.href = "https://www.google.com";

document.querySelector(".titulo").textContent = "Título Modificado";

document.body.style.backgroundColor = "#f0e68c";