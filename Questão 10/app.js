let salario=prompt("Qual é o salário original?");
let novoSalario;
if(salario<=2000){
    novoSalario=salario*(1.1);
    alert("O salário antes do aumento é de R$:" +salario+ ". O salário com o aumento é de R$" +novoSalario);
    alert("O aumento foi de 10%");
}
else if(salario > 5000 && salario < 10000){
    novoSalario=salario*(1.05);
    alert("O salário antes do aumento é de R$:" +salario+ ". O salário com o aumento é de R$" +novoSalario);
    alert("O aumento foi de 5%");
}
else if(salario>10000 && salario<15000){
    novoSalario=salario*(1.02);
    alert("O salário antes do aumento é de R$:" +salario+ ". O salário com o aumento é de R$" +novoSalario);
    alert("O aumento foi de 2%");
}
else{
    alert("Não há definição para o aumento no salário");
}
