
let cabecalho       = document.getElementById("cabecalho")
let pag_posicao     = document.getElementById("parte1").offsetTop
let scrollAnterior  = 0
window.addEventListener("resize", function() {
    pag_posicao = document.getElementById("parte1").offsetTop
})
window.addEventListener("scroll", function(){

    let scrollTop = window.scrollY

    if (window.scrollY < scrollAnterior) {
        cabecalho.style.top = "0"
    
    }else if (window.scrollY < 200) {
        cabecalho.style.top = "0"
    }else {
        cabecalho.style.top = "-100px"
    }
    scrollAnterior = scrollTop
})
cabecalho.style.top = "0"




