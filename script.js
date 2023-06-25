const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close")
const nav = document.getElementById("nav")

menu.addEventListener('click', () => nav.classList.add('open-nav'))

closeMenu.addEventListener('click', () => nav.classList.remove('open-nav'))