var lista1; //variável responsável pelas duas funções
var lista2;
function botao(){
    var nome= prompt ("digite seu nome:"); 
    var acertos= prompt ("digite a quantidade de acertos:");

    lista1 = document.getElementById("nomes").innerHTML; //lista 1 responsável pelos nomes
    lista2 = document.getElementById("acertos").innerHTML; //lista 2 responsável pelos nomes
    lista1 = lista1 + "<li>" + " Nome: " + nome + lista2 + "\n•\nQuantidade Acertos: " + acertos +"</li>";
   
    if(acertos >= 70){
        document.getElementById("acert").innerHTML = (nome +"\nVocê foi aprovado/a para a segunda fase!");
    }else if (acertos >=50  ){
        document.getElementById("acert").innerHTML = (nome + "\nVocê foi aprovado/a!");
    }
    else if(acertos <=50){
        document.getElementById("acert").innerHTML = (nome +"\nVocê foi reprovado/a!");
    }
}
 function mostrar(){
    document.getElementById("nomes").innerHTML = lista1;
    document.getElementById("acertos").innerHTML = lista2;
 }