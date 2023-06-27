
const bgNone = [
  parte1 = document.getElementById("parte1"),
  parte2 = document.getElementById("parte2"),
  parte3 = document.getElementById("parte3"),
  footer = document.getElementById("footer")
]
const botaoSeta = document.getElementById("seta")

const alternaClass = () => {
    bgNone.forEach( el => {
      el.className = 'BG'
    })
    
    const parte1 = document.getElementById("parte1").offsetTop
    setTimeout(() => {
      
      window.scrollTo( 0, parte1)
    }, 500)
}

botaoSeta.onclick = () => {
  alternaClass()
  event.preventDefault()
}
