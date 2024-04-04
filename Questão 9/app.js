let nome=prompt('Qual é o nome do cliente?');
document.getElementById('nomeCliente').textContent=nome;

function dateSplit(dateString){
    const dateParts = dateString.split("/");
    console.log(dateParts); 
    return new Date(Date.UTC(dateParts[2], dateParts[1]-1, dateParts[0]))
}