// Bloco para o tema
const tela = document.querySelector('body')
const tema = document.querySelector('.tema')
// Mudar o tema
function mudarTema() {
    tela.classList.toggle('claro')
    tela.classList.toggle('escuro')
}
// Funcionalidade quando clicar no tema
tema.addEventListener('click', mudarTema)



// Bloco para o menu
const menu = document.querySelector('.menu')
const areaMenu = document.querySelector('.areaMenu')
function clicouMenu(){
    menu.classList.toggle('ativo')
    areaMenu.classList.toggle('areaAtiva')
}
menu.addEventListener('click', clicouMenu)