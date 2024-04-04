var contagem=[];
var aux=1;
while (aux <=10){
    contagem[aux]=aux;
    aux++;
}
alert(contagem);
document.querySelector('#contagemTeste').textContent = (`Contando de 1 a 10: ${contagem}`);
    