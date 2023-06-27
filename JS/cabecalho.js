
const cabecalho = document.getElementById("cabecalho")
const logo_leao = document.getElementById("logoTipoImg")
larguraTela()

window.addEventListener("resize", function() {
    larguraTela()
})

function larguraTela() {
    const largura_tela = window.innerWidth
    if (largura_tela >= 900) {
        menuWeb()
    }else {
        menuMobile()
    }
}
function menuWeb() {
    //Set imagem do menu
    logo_leao.src = "./IMG/logoleao.png"
    //Set posição do menu
    cabecalho.style.top = "-100px"
    cabecalho.style.left = "50%"
    //set scroll
    let scrollAnterior = window.scrollY
    document.body.onscroll = () => {
      
    const pag_posicao = document.getElementById("parte1").offsetTop
    //console.log(pag_posicao)
        if (window.scrollY >= pag_posicao && window.scrollY < scrollAnterior || window.scrollY >= pag_posicao && window.scrollY < (pag_posicao * 2)) {
            cabecalho.style.top = "0"
            //console. log("apareceu")
        } else {
            cabecalho.style.transition = "top 1s"
            cabecalho.style.top = "-100px"
            //console. log("não apareceu")
        }

        scrollAnterior = window.scrollY
    }
}
function menuMobile() {
    //Set do scroll
    document.body.onscroll = ""
    //Set imagem do menu
    logo_leao.src = "./IMG/logoleao_menu2.png"
    //Set posição do menu
    cabecalho.style.left = "-100%"
    cabecalho.style.top = "0px"

    let menu_aberto = false

    logo_leao.onclick = () => {
        menu_aberto === false ? menu_aberto = true : menu_aberto = false
        if (menu_aberto === true) {
            logo_leao.src = "./IMG/logoleao_menu.png"
            cabecalho.style.transition = "left 500ms cubic-bezier(.2, .2, .4, 1)"
            cabecalho.style.left = "0"
        } else {
            logo_leao.src = "./IMG/logoleao_menu2.png"
            cabecalho.style.left = "-100%"
        }
    }
}

//----------------
//Menu visite-nos
//Menu doe
//----------------

const fadeV = document.getElementById("fadeV")
const b_visite_nos = document.getElementById("botao_visite_nos")
const visite_nos = document.getElementById("visite_nos")
const label_visite_nos = document.getElementById("fechar_visite_nos")

const fadeD = document.getElementById("fadeD")
const b_doe = document.getElementById("botao_doe")
const doe = document.getElementById("doe")
const label_doe = document.getElementById("fechar_doe")


let toggleVisite_nos = () => {
  event.preventDefault()
  fadeV.classList.toggle("hide")
  visite_nos.classList.toggle("hide")
}
[b_visite_nos, fadeV, label_visite_nos].forEach((el) => {
  el.addEventListener("click", () => toggleVisite_nos())
})

let toggleDoe = () => {
  event.preventDefault()
  fadeD.classList.toggle("hide")
  doe.classList.toggle("hide")
}
[b_doe, fadeD, label_doe].forEach((el) => {
  el.addEventListener("click", () => toggleDoe())
})

