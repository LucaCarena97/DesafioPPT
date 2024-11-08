export interface EstadoJuego {
  puntajeJugador: number;
  puntajeCpu: number;
  eleccionJugador: string | null;
  eleccionCpu: any;
  valorCuentaRegresiva: number;
}

export const estadoJuego: EstadoJuego = {
  puntajeJugador: 0,
  puntajeCpu: 0,
  eleccionJugador: null,
  eleccionCpu: null,
  valorCuentaRegresiva: 3,
};

export function reiniciarEstadoJuego() {
  estadoJuego.eleccionJugador = null;
  estadoJuego.eleccionCpu = null;
  estadoJuego.valorCuentaRegresiva = 3;
}

export function reiniciarPuntajes() {
  estadoJuego.puntajeJugador = 0;
  estadoJuego.puntajeCpu = 0;
}
