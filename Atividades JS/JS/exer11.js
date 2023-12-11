function parcelas() {
    let preco = parseFloat(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let parcelas = 1; parcelas <= 10; parcelas++) {
        let valorParcela = (preco / parcelas).toFixed(2);//toFixed(2) permite arredondar o número para duas casas decimais
        resultado.innerHTML += `<p>${parcelas}x de R$ ${valorParcela}</p>`;
    }
}
