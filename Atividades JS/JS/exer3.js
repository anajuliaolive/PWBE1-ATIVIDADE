
function promocao(){
    let nome = document.getElementById("med").value;
    let preco = document.getElementById("pre").value;
    let valor = preco*2 - preco * 0.1;
    document.getElementById("b1").innerHTML = ("PROMOÇÃO LEVE 2 PAGUE 1!!!");
    document.getElementById("b2").innerHTML = (nome);
    document.getElementById("b3").innerHTML = (valor);
}