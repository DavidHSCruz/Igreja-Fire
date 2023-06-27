async function loadCelulas() {
    const lista_celulas_bits = await fetch('http://localhost:3000/celulas')
    const lista_celulas_json = lista_celulas_bits.json()
    return lista_celulas_json
}

export const conecta_api = {
    loadCelulas
}