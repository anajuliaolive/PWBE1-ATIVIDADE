function myFunction(){
    let valor = document.getElementById("valor").value;
    let re = valor%2;
    if(re==0){
        document.getElementById("v1").innerHTML = "Resposta:" + valor + " é par";
    }else{
        document.getElementById("v1").innerHTML = "Resposta:" + valor + " é impar";
    }
}