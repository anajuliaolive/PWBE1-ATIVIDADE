var lista = []; // Array para armazenar os dados

function botao() {
    var nome = prompt("Digite seu nome:");
    var acertos = prompt("Digite a quantidade de acertos:");
    // Cria um objeto "item" com o nome e a quantidade de acertos
    var item = {
        nome: nome,
        acertos: acertos
    };
    // Adiciona o objeto "item" à array "lista"
    lista.push(item);
    // Salva a array "lista" no localStorage como uma string JSON
    localStorage.setItem("lista", JSON.stringify(lista));
    // Chama a função "mostrarResultado()" para exibir uma mensagem com base na quantidade de acertos
    mostrarResultado(item);
}

function mostrarResultado(item) {
    // Cria uma variável "mensagem" com o nome do usuário
    var mensagem = item.nome;
    // Verifica a quantidade de acertos e adiciona uma mensagem com base nesse valor
    if (item.acertos >= 70) {
        mensagem += "\nVocê foi aprovado/a para a segunda fase!";
    } else if (item.acertos >= 50) {
        mensagem += "\nVocê foi aprovado/a!";
    } else {
        mensagem += "\nVocê foi reprovado/a!";
    }
    // Atualiza o conteúdo de um elemento HTML com o ID "acert" com a mensagem
    document.getElementById("acert").innerHTML = mensagem;
}

function mostrar() {
    // Cria uma variável vazia para armazenar a representação HTML da lista de dados
    var listaHtml = "";
    // Obtém os dados do localStorage e os converte em um array
    lista = JSON.parse(localStorage.getItem("lista")) || [];
    // Repete a array e cria uma representação HTML para cada item da lista
    for (var i = 0; i < lista.length; i++) {
        listaHtml += "<li>Nome: " + lista[i].nome + "<br>Quantidade Acertos: " + lista[i].acertos + "</li>";
    }
    // Atualiza o conteúdo de um elemento HTML com o ID "nomes" com a lista formatada em HTML
    document.getElementById("nomes").innerHTML = listaHtml;
}
