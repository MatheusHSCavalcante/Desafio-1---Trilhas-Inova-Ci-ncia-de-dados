var nome= prompt('Olá, qual é o seu nome?');
console.log(nome);
if (nome == null || nome.replace(/\s/g, '') == '' ){
    alert('Desculpe, nenhum nome fornecido!');
    document.querySelector('#nomeTeste').textContent = ('Desculpe, nenhum nome fornecido!');
}
else{
    document.querySelector('#nomeTeste').textContent = (`Seja bem-vindo ${nome} a nossa empresa!`);
    alert(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa`);
}
