
//padStart = Permite adicionar caracteres extras no início de uma string até que ela alcance um comprimento específico. ***string.padStart(targetLength, padString)***


setInterval(function(){

    //Dinamica da hora

    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds()



    let horaFormatada = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    document.getElementById('relogio').innerHTML = horaFormatada;

    
    //array com os dias da semana e mes

    let semana = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado'
    ]

    let meses = [
        'Janeiro', 
        'Fevereiro', 
        'Março', 
        'Abril', 
        'Maio', 
        'Junho', 
        'Julho', 
        'Agosto', 
        'Setembro', 
        'Outubro', 
        'Novembro', 
        'Dezembro'
    ]
       
    //Dinamica do dia mes e ano
    
    let diaSemana = semana[data.getDay()]
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    let nomeMes = meses[mes]

    let diaFormatado = `${diaSemana}, ${dia.toString().padStart(2, '0')} de ${nomeMes} de ${ano}`
    

    document.getElementById('diaDaSemana').innerHTML = diaFormatado

},1000)



    




