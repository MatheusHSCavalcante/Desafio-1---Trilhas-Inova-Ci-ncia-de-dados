var salario=[];
var quantFuncionarios=prompt('Qual é a quantidade de funcionários?');
let i=1;
let soma=0;
while(i<=quantFuncionarios){

    salario[i]=prompt('Digite o salário de cada funcionário:');

    if (salario[i] == null || salario[i].replace(/\s/g, '') == '' ){

        alert('Desculpe, você não forneceu nenhum salário');
        salario[i]=prompt('Digite o salário de cada funcionário');
    }
    else{
        soma=parseFloat(soma)+parseFloat(salario[i]);
        i++;
    }
 }

 alert(`A folha total de pagamento é de: R$ ${soma}`);
 document.querySelector('#valorTeste').innerHTML = (`Salário total da folha de pagamento: R$ ${soma}`);
