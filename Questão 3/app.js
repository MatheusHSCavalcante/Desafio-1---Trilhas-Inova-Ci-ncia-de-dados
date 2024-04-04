var nome= prompt('Olá, qual é o nome do aluno?');
var notas=[];
var soma=0;
var media;

if (nome == null || nome.replace(/\s/g, '') == '' ){
    alert('Desculpe, você não forneceu nenhum nome');
    nome='';
}

var aux = 1;

while(aux<=3){

    notas[aux] = prompt(`Digite a ${aux}° nota`);

    if (notas[aux]>10 || notas[aux]<0){
        alert('A nota deve ser entre 0 e 10');
    }

    else if (notas[aux]== null || notas[aux].replace(/\s/g, '') == ''){
        alert(`Desculpe, você deve fornecer a ${aux}° nota!`);
}

    else{
        soma=((parseInt(soma))+parseInt((notas[aux])));
        aux++;
    }
}

media=soma/3;

if (media>=7){
    alert('Aluno aprovado!');
    document.querySelector('#notaTeste').textContent = (`O aluno ${nome} foi aprovado! Sua média foi de ${media.toFixed(2)}`);
    document.getElementById('imagem').innerHTML='<img src=img/Aprovado.jpg>';
}
else{
    alert('Aluno reprovado');
    document.querySelector('#notaTeste').textContent = (`O aluno ${nome} foi reprovado! Sua média foi de ${media.toFixed(2)}`);
    document.getElementById('imagem').innerHTML='<img src=img/Reprovado.jpg>'
}