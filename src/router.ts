import { renderHome } from "../src/pages/Home";
import { renderPlay } from "../src/pages/Play";
import { preJuego } from "../src/components/PreGame";

const routes: { [key: string]: () => void } = {
  "/": renderHome,
  "/pre-game": preJuego,
  "/play": renderPlay,
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path];
  if (route) {
    route();
  }
}

export function navigateTo(url: string) {
  history.pushState(null, "", url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(target.getAttribute("href") || "/");
    }
  });

  router();
});
