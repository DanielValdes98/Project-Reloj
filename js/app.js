const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let annio = fecha.getFullYear();
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes} ${annio}`;

    document.getElementById('contenedor').classList.toggle('animar'); // toggle : Funcionar como un swicth automatico, aplica una vez si y una vez no cada segundp
} 

const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora
    return hora;
}

setInterval(mostrarReloj, 1000);