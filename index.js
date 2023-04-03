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


// Scroll suave seções
const itemMenu = document.querySelectorAll('.areaMenu li a[href^="#"]')
function scrollItem(event) {
    event.preventDefault()
    const elemento = event.target
    const id = elemento.getAttribute('href')
    // Pegar a posição inicial do item
    const secao = document.querySelector(id).offsetTop
    // Scroll para o elemento como objeto para agregar mais parâmetros
    window.scroll({
        top: secao,
        behavior: "smooth" // determina o comportamento do scroll / smooth é suáve.
    })
}
// Função scroll das seções
itemMenu.forEach( item => {
    item.addEventListener('click', scrollItem)
})

