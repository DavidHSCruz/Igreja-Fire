
let carrocel = document.getElementById("carrocel")

carrocel.style.background = "url(./IMG/AtesermosUm_carrocel.jpg) no-repeat"
let gr = 1
let foto_position = 0

setInterval( function() {
    foto_position -= 320
    if (foto_position < -1280) {
        gr++
        foto_position = 0
    }
    gr > 5 ? gr = 1: 0;

        switch (gr) {
            case 1:
                carrocel.style.background = "url(./IMG/AtesermosUm_carrocel.jpg) no-repeat"
                break
            case 2:
                carrocel.style.background = "url(./IMG/cartasVivas_carrocel.jpg) no-repeat"
                break
            case 3:
                carrocel.style.background = "url(./IMG/Efraim_carrocel.jpg) no-repeat"
                break
            case 4:
                carrocel.style.background = "url(./IMG/FirmadosnaRocha_carrocel.jpg) no-repeat"
                break
            case 5:
                carrocel.style.background = "url(./IMG/MaisqueVencedores_carrocel.jpg) no-repeat"
                break
        }      
    carrocel.style.backgroundPositionX = foto_position + "px"
}, 2000)
