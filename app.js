// const btn = document.querySelector('.menu-button')
// const nav = document.querySelector('.nav')

// const menu = document.querySelector('.menu-button')



// btn.addEventListener('click', ()=>{
//     nav.classList.toggle('activo')
//     menu.classList.toggle('activox')
// })

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('activo');
  menuButton.classList.toggle('activox');
});






