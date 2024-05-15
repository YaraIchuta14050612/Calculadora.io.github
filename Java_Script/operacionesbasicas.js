function calcular(operacion) {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)

    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = a + b;
            break;
        case 'resta':
            resultado = a - b;
            break;
        case 'multiplicacion':
            resultado = a * b;
            break;
        case 'division':
            if (b === 0) {
                document.getElementById('res').innerHTML = "No se puede dividir por cero";
                return;
            }
            resultado = a / b;
            break;
        default:
            resultado = "Operación no reconocida";
    }

    document.getElementById('res').innerHTML = resultado.toFixed();
}
