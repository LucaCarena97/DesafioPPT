import { footer } from "../../src/components/Footer";

export function renderHome() {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <p class="titulo">Piedra, Papel o Tijera</p>
        <section>
          <a class="empezar" href="/pre-game" data-link>Empezar</a>
        </section>
 <footer id="footer"></footer>
    `;
  }
  footer();
}
