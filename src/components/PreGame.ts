import { footer } from "../components/Footer";

export function preJuego() {
  const aplicacion = document.getElementById("app");
  if (aplicacion) {
    aplicacion.innerHTML = `
      <p class="texto">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        <section>
          <a class="empezar" href="/play" data-link>¡Jugar!</a>
        </section>
      <footer id="footer"></footer>
    `;
  }
  footer();
}
