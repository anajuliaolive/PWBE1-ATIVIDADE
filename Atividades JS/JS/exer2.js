function myFunction(){
    var nome= prompt ("digite seu nome:");
    var email = prompt ("digite seu email:");
    var lista = document.getElementById("nomes").innerHTML;
    lista = lista + "<li>" + " Nome: " + nome + ", Email: " + email + "</li>"; 
    document.getElementById("nomes").innerHTML = lista;
}
