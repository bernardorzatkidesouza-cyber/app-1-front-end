const pessoa={
    nome:'Paulo',
    idade:33,
    cidade:'Criciuma'
}
function getMsg(){
    const hora= new Date().getHours();

    if (hora <12){
        return'Bom Dia'
    }
    if(hora<18){
        return'Boa Tarde'
    }
    return'Boa Noite'
}
const greething=document.getElementById('greething');
greething.textContent = `${getMsg()}, ${pessoa.nome}`;

//banners indiacadores

const indicadores={
    tempo:"18h 45m",
    tarefas: 5,
    chats:16
}
const titledois=document.getElementsByClassName('card__titledois');
console.log(titledois);
titledois[0].textContent = `${indicadores.tempo}`;
titledois[1].textContent = `${indicadores.tarefas}`;
titledois[2].textContent = `${indicadores.chats}`;
//aulas concluidas
const aulas={
    front:46,
    desing:12
}
const progress= document.querySelectorAll('.card__progress div');
progress[0].textContent = aulas.front + '%';
progress[0].textContent = aulas.front + '%';

progress[0].textContent = aulas.front + '%';
progress[0].textContent = aulas.front + '%';

//alert no click(medio)