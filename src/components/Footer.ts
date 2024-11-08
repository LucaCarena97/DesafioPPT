export function footer() {
  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
      <section>
        <img src="/tijera.png" alt="Piedra" />
        <img src="/piedra.png" alt="Piedra" />
        <img src="/papel.png" alt="Piedra" />
      </section>
    `;
  }
}
