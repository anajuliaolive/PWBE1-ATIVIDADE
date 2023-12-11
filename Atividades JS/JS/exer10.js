function mostrar() {
   let numero = parseInt(document.getElementById("numero").value);//o parseint serve para transformar o número em valor inteiro

    for (let i = 1; i <= 10; i++) {//for é usado para declarar novas variáveis com var
        let resultado = numero * i;
        tabuadaResultado.innerHTML += numero + " x " + i + " = " + resultado + "<br>";
    }
}





