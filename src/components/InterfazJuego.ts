export function renderizarJuegoInterface(app: HTMLElement) {
  document.body.classList.remove("ganaste", "perdiste");
  app.innerHTML = `
    <div class="juego">
      <div id="resultado" class="resultado"></div>
      <div id="puntaje" class="puntaje"></div>
      <div id="acciones"></div>
      <div id="eleccion-cpu" class="eleccion-cpu">
        <img id="imagen-cpu" src=""/>
      </div>
        <div id="cuenta-regresiva" class="cuenta-regresiva">
        <div class="spinner"></div>
      </div>
      <section class="opciones">
      <button id="tijera"> <img src="/tijera.png" alt="Tijera" /></button>
      <button id="piedra"> <img src="/piedra.png" alt="Piedra" /></button>
      <button id="papel"> <img src="/papel.png" alt="Papel" /></button>
      </section>
      </div>
      `;
}
