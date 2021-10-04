// Elementos del DOM

const darkbutton = document.getElementById("dark");
const lightbutton = document.getElementById("light");
const solarbutton = document.getElementById("solar");
const body = document.body;

// Aplicar el cache de tema al recargar

const theme = localStorage.getItem();

// Manejadores de Eventos en Botones

darkbutton.onclick() => {

body.classList.replace('light','dark');
// Otra forma de realizar:
// body.classList.remove('light');
// body.classList.add('dark');
};

lightbutton.onclick() => {
    body.classList.replace('dark','light');
};

solarbutton.onclick() => {
if(body.classList.contains('solar')){
body.classList.remove('solar');
solarbutton.style.cssText = `
--bg-solar: var(--yellow);
`
solarbutton.innerText = 'solarize';
}else{
    body.classList.add('solar');
solarbutton.style.cssText = `
--bg-solar: var(--white);
`
solarbutton.innerText = 'normalize';
}


};