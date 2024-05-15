//Java Script para hallar el imc de tu mascota
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

function imc(){
    let h = parseInt(document.getElementById('h').value)
    let p = parseInt(document.getElementById('p').value)
    let imc = 703 * (p / (h ** 2))
    document.getElementById('res').innerHTML = imc.toFixed(1)
    
    if (imc < 18.5)
        document.getElementById('res2').innerHTML = 'Está en bajo peso'
    else if (imc >= 18.5 || imc <= 24.9)
        document.getElementById('res2').innerHTML = 'Está con un peso normal'
    else if (imc >= 25 || imc <= 29.9)
        document.getElementById('res2').innerHTML = 'Está con exceso de peso'
    else
        document.getElementById('res2').innerHTML = 'Está con obesidad'
}
