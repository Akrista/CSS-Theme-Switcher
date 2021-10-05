// Elementos del DOM

const darkbutton = document.getElementById("dark");
const lightbutton = document.getElementById("light");
const solarbutton = document.getElementById("solar");
const body = document.body;

// Aplicar el cache de tema al recargar

const theme = body.classList.replace("light", "dark");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Manejadores de Eventos en Botones

// Aplicar tema oscuro

darkbutton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
  // Otra forma de realizar:
  // body.classList.remove('light');
  // body.classList.add('dark');
};

// Aplicar tema claro

lightbutton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

// Aplicar tema solarizado

solarbutton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarbutton.style.cssText = `
--bg-solar: var(--yellow);
`;
    localStorage.removeItem("isSolar");
    solarbutton.innerText = "solarize";
  } else {
    body.classList.add("solar");
    solarbutton.style.cssText = `
--bg-solar: var(--white);
`;
    solarbutton.innerText = "normalize";
    localStorage.setItem("isSolar", true);
  }
};
