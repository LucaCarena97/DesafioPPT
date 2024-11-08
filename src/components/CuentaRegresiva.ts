import { estadoJuego } from "../state";

export function CuentaRegresiva(onTimeout: () => void) {
  const divCuentaRegresiva = document.createElement("div");
  divCuentaRegresiva.id = "cuenta-regresiva";
  divCuentaRegresiva.className = "cuenta-regresiva";
  divCuentaRegresiva.textContent = estadoJuego.valorCuentaRegresiva.toString();

  let intervaloCuentaRegresiva: any = null;

  function iniciarCuentaRegresiva() {
    clearInterval(intervaloCuentaRegresiva);
    intervaloCuentaRegresiva = setInterval(() => {
      estadoJuego.valorCuentaRegresiva--;
      divCuentaRegresiva.textContent =
        estadoJuego.valorCuentaRegresiva.toString();
      if (estadoJuego.valorCuentaRegresiva <= 0) {
        clearInterval(intervaloCuentaRegresiva);
        onTimeout();
      }
    }, 1000);
  }

  iniciarCuentaRegresiva();

  return divCuentaRegresiva;
}
