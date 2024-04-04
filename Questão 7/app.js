
var numeros=[];
var i=1;
var divisao=1;
var aux = 1;

while(aux<=2){

    numeros[aux] = prompt(`Digite o ${aux}° número`);

    if (numeros[aux]== null || numeros[aux].replace(/\s/g, '') == ''){
        alert(`Desculpe, você deve fornecer o ${aux}° número!`);
}
    else if(aux==2 && numeros[aux]==0){
        alert('Zero não pode dividir nenhum número!');  
    }
    else{
        i=numeros[aux]/i;
        aux++;
    }
}
divisao=i**-1;
if(numeros[aux-1]*divisao.toFixed(0) == numeros[aux-2]){
    alert(`O número ${numeros[aux-2]} é divisível por ${numeros[aux-1]}`);
    document.querySelector('#valorTeste').textContent = (`O número ${numeros[aux-2]} é divisível por ${numeros[aux-1]}`);
}
else{
    alert(`O número ${numeros[aux-2]} não é divisível por ${numeros[aux-1]}`);
    document.querySelector('#valorTeste').textContent = (`O número ${numeros[aux-2]} não é divisível por ${numeros[aux-1]}`);
}


