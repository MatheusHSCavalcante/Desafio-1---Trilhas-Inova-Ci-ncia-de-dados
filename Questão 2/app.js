var idade= prompt('Olá, qual é a sua idade?');
while (idade== null || idade.replace(/\s/g, '') == '' ){
    alert('Desculpe, você deve fornecer uma idade!');
    document.querySelector('#idadeTeste').textContent = ('Desculpe, nenhuma idade fornecida!');
    idade = prompt('Olá, qual é a sua idade?');
}
if (idade>=60){
    alert('Aguarde na fila de prioridade');
    document.querySelector('#idadeTeste').textContent = ('Aguarde na fila de prioridade');
    document.getElementById('imagem').innerHTML='<img src=img/FilaIdosos.jpg>';
}
else{
    alert('Aguarde na fila normal');
    document.querySelector('#idadeTeste').textContent = ('Aguarde na fila normal');
    document.getElementById('imagem').innerHTML='<img src=img/FilaNormal.jpg>'
}