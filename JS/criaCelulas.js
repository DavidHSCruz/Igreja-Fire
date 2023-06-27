import { conecta_api } from "./conectaAPI.js"

const celulas = document.getElementById('celulas')
let celula_array = []
let GRs = []

class GR {
  constructor(titulo, lider, img_gr, img_lider, descricao, local, data) {
    this.titulo = titulo
    this.lider = lider
    this.img_gr = img_gr
    this.img_lider = img_lider
    this.descricao = descricao
    this.local = local
    this.data = data
  }

  criarGr(id) {
    let cor_bg_celula
    if (id % 2 == 0) {
      cor_bg_celula = 'tipo1'
    } else {
      cor_bg_celula = 'tipo2'
    }
    celulas.innerHTML += `<div id="${'celula' + id}" class="${cor_bg_celula}">
                            <span class="${cor_bg_celula}">
                            <div>
                              <div id="celula_img" class="${cor_bg_celula}" style="background: url('${this.img_lider}') no-repeat center; background-size: 150px">
                              </div>
                            </div>
                            </span>
                            <div id="celula_inf">
                              <h2 id="titulo_celula">${this.titulo}</h2>
                              <h3 id="nome_lider">${this.lider}</h3>
                              <p id="descricao_celula">${this.descricao}</p>
                              <p id="data_celula">${this.data}</p>
                              <p id="local_celula">${this.local}</p>
                            </div>
                          </div>`
  }
}

async function criaCelulas() {
  const lista_de_celulas = await conecta_api.loadCelulas()
  const n_celulas = lista_de_celulas.length
  for (let i = 1; i <= n_celulas; i++) {
    let x = lista_de_celulas.find(x => x.id === i)
    GRs[i] = new GR(x.titulo, x.lider, x.img_gr, x.img_lider, x.descricao, x.local, x.data)
    GRs[i].criarGr(i)
    celula_array[i] = document.getElementById('celula' + i)
  }
}
criaCelulas()