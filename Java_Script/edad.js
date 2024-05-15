//Java Script para hallar la edad de la mascota
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

function edad(){
    let n = parseInt (document.getElementById('n').value)
    r = Math.log(n)
    ep=16*r+31
    document.getElementById('res').innerHTML=ep.toFixed()
}

function edad7(){
    let n= parseInt (document.getElementById('n').value)
    e = n * 7
    document.getElementById('res2').innerHTML=e.toFixed()
}