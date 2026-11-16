var formulario = document.querySelector("#formulario");
var inputEdad = document.querySelector("#edad");
var resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  var edad = Number(inputEdad.value);
  var genero = document.querySelector('input[name="genero"]:checked').value;

  // Un solo if con operadores lógicos y de relación
  if ((genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65)) {
    resultado.className = "si mostrar";
    resultado.innerHTML = "🎉 ¡Podés jubilarte!<small>Se reinicia en unos segundos...</small>";
  } else {
    resultado.className = "no mostrar";
    resultado.innerHTML = "⏳ Todavía no podés jubilarte<small>Se reinicia en unos segundos...</small>";
  }

  // Después de 4 segundos, se reinicia todo
  setTimeout(function () {
    formulario.reset();
    resultado.className = "";
    inputEdad.focus();
  }, 4000);
});