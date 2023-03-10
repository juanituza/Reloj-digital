const mostrarReloj = () => {
    let fecha = new Date();
    let hs = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hs}:${min}:${seg}` ;

    const meses =['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Jul', 'Ago', 'Sep', 'Oct','Nov','Dic'];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = formatoHora(fecha.getDate());
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = ` ${diaSemana} / ${dia} ${mes} / ${anio}`;
    document.getElementById('fecha').innerHTML= fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora= (hora)=> {
    if (hora < 10) 
        hora = '0' + hora;
        return hora;
        
    
}

setInterval(mostrarReloj, 1000);