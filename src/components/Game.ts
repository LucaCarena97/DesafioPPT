import { CuentaRegresiva } from "./CuentaRegresiva";
import { estadoJuego, reiniciarEstadoJuego, reiniciarPuntajes } from "../state";
import { renderizarJuegoInterface } from "./InterfazJuego";
import { renderizarResultadoJuego } from "./ResultadoGame";

const opciones = ["Piedra", "Papel", "Tijera"];

export function renderizarJuego() {
  const aplicacion: HTMLElement | null | any = document.getElementById("app");
  if (!aplicacion) return;

  renderizarJuegoInterface(aplicacion);

  const cuentaRegresivaContenedor = document.getElementById("cuenta-regresiva");

  if (cuentaRegresivaContenedor) {
    cuentaRegresivaContenedor.appendChild(
      CuentaRegresiva(() => {
        estadoJuego.eleccionCpu =
          opciones[Math.floor(Math.random() * opciones.length)];
        jugar();
      })
    );
  }

  const divPuntaje = document.getElementById("puntaje")!;
  const piedraBtn = document.getElementById("piedra");
  const papelBtn = document.getElementById("papel");
  const tijeraBtn = document.getElementById("tijera");

  if (piedraBtn) {
    piedraBtn.addEventListener("click", () => manejarEleccionJugador("Piedra"));
  }
  if (papelBtn) {
    papelBtn.addEventListener("click", () => manejarEleccionJugador("Papel"));
  }
  if (tijeraBtn) {
    tijeraBtn.addEventListener("click", () => manejarEleccionJugador("Tijera"));
  }

  function manejarEleccionJugador(eleccion: string) {
    estadoJuego.eleccionJugador = eleccion;
    deshabilitarBotones(eleccion);
  }

  function deshabilitarBotones(eleccion: string) {
    const botones = document.querySelectorAll("button");
    botones.forEach((boton) => {
      if (boton.id !== eleccion.toLowerCase()) {
        boton.classList.add("disabled", "darkened");
      }
    });
  }

  function jugar() {
    if (!estadoJuego.eleccionJugador) {
      estadoJuego.eleccionCpu =
        opciones[Math.floor(Math.random() * opciones.length)];
      estadoJuego.puntajeCpu += 3;

      const divResultado = renderizarResultadoJuego(
        null,
        estadoJuego.eleccionCpu,
        estadoJuego.puntajeJugador,
        estadoJuego.puntajeCpu,
        "Perdiste",
        reiniciarJuego,
        () => {
          reiniciarPuntajes();
          window.location.href = "/";
        }
      );

      aplicacion.innerHTML = "";
      aplicacion.appendChild(divResultado);
      return;
    }

    estadoJuego.eleccionCpu =
      opciones[Math.floor(Math.random() * opciones.length)];
    const resultado = determinarGanador(
      estadoJuego.eleccionJugador,
      estadoJuego.eleccionCpu
    );
    mostrarImagenEleccionCpu(estadoJuego.eleccionCpu);

    setTimeout(() => {
      const divResultado = renderizarResultadoJuego(
        estadoJuego.eleccionJugador,
        estadoJuego.eleccionCpu,
        estadoJuego.puntajeJugador,
        estadoJuego.puntajeCpu,
        resultado,
        reiniciarJuego,
        () => {
          reiniciarPuntajes();
          window.location.href = "/";
        }
      );

      aplicacion.innerHTML = "";
      aplicacion.appendChild(divResultado);
    }, 3000);
  }

  function mostrarImagenEleccionCpu(eleccion: string) {
    const imagenEleccionCpu = document.getElementById(
      "imagen-cpu"
    ) as HTMLImageElement;
    imagenEleccionCpu.src = `/${eleccion.toLowerCase()}.png`;
    imagenEleccionCpu.alt = eleccion;
    imagenEleccionCpu.classList.add("rotar-180");
  }

  function determinarGanador(jugador: string | null, cpu: string): string {
    if (!jugador) {
      throw new Error("El jugador no ha hecho una elección.");
    }

    if (jugador === cpu) {
      return "Empate";
    }
    if (
      (jugador === "Piedra" && cpu === "Tijera") ||
      (jugador === "Papel" && cpu === "Piedra") ||
      (jugador === "Tijera" && cpu === "Papel")
    ) {
      estadoJuego.puntajeJugador += 3;
      return "Ganaste";
    }
    estadoJuego.puntajeCpu += 3;
    return "Perdiste";
  }

  function reiniciarJuego() {
    reiniciarEstadoJuego();
    renderizarJuego();
  }

  divPuntaje.innerHTML = `Puntaje: Vos ${estadoJuego.puntajeJugador} - CPU ${estadoJuego.puntajeCpu}`;
}
