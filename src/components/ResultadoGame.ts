export function renderizarResultadoJuego(
  eleccionJugador: string | null,
  eleccionCPU: string,
  puntajeJugador: number,
  puntajeCPU: number,
  resultado: string,
  alJugarOtraVez: () => void,
  alSalirDelJuego: () => void
): HTMLElement {
  const divResultado = document.createElement("div");
  let imagenResultado = "";

  if (resultado === "Ganaste") {
    imagenResultado = '<img src="/ganaste.png" alt="Ganaste" />';
    document.body.classList.add("ganaste");
    document.body.classList.remove("perdiste");
  } else if (resultado === "Perdiste") {
    imagenResultado = '<img src="/perdiste.png" alt="Perdiste" />';
    document.body.classList.add("perdiste");
    document.body.classList.remove("ganaste");
  } else if (resultado === "Empate") {
    imagenResultado = '<p class="empate">¡Empate!</p>';
    document.body.classList.remove("ganaste", "perdiste");
  }

  divResultado.innerHTML = `
    <h1>Resultado de la partida</h1>
    <div class="resumen">
      ${
        eleccionJugador
          ? `Tú: ${eleccionJugador}`
          : "Tiempo agotado. La CPU gana automáticamente."
      }
      <div>CPU: ${eleccionCPU}</div>
    </div>
    <div class="imgScore">
      ${imagenResultado}
    </div>
    <section class="puntajeFinal">
      <p class="score">Score</p>
      <div class="scoreNum">
        <p>Vos: ${puntajeJugador} </p>
        <p>Máquina: ${puntajeCPU} </p>
      </div>
    </section>
    <div class="opcionesJuego">
      <button id="jugar-de-nuevo">Volver a jugar</button>
      <button id="salir-del-juego">Salir del juego</button>
    </div>
  `;

  divResultado
    .querySelector("#jugar-de-nuevo")
    ?.addEventListener("click", alJugarOtraVez);
  divResultado
    .querySelector("#salir-del-juego")
    ?.addEventListener("click", alSalirDelJuego);

  return divResultado;
}
