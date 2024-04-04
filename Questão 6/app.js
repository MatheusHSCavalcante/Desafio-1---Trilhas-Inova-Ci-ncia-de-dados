var numeros=[];
var multiplicacao=1;

var aux = 1;

while(aux<=2){

    numeros[aux] = prompt(`Digite o ${aux}° número`);

    if (numeros[aux]== null || numeros[aux].replace(/\s/g, '') == ''){
        alert(`Desculpe, você deve fornecer o ${aux}° número!`);
}

    else{
        multiplicacao=multiplicacao*numeros[aux];
        aux++;
    }
}
    alert(`A multiplicação entre os dois números é: ${multiplicacao.toFixed(2)}`);
    document.querySelector('#valorTeste').textContent = (`O resultado da multiplicação é: ${multiplicacao.toFixed(2)}`);
    