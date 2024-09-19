
 function clock()
{
let data = new Date;
let hora = data.getHours()
let minuto = data.getMinutes()
let segundo = data.getSeconds()
let horas = `${hora}:${minuto}:${segundo}`
document.getElementById("relogio").textContent = horas
}
clock()
setInterval(clock, 1000);