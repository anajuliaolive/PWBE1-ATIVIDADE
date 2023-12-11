function myFunction(){
    let valor = document.getElementById("saque").value;
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    do{
        if(valor >=100){
            nota100 = nota100 +1;
            valor = valor -100;
        }else if(valor >=50){
            nota50 = nota50 +1;
            valor = valor -50;
        }else if(valor >=10){
            nota10 = nota10 +1;
            valor = valor - 10;
        }else {
        alert("não é possível realizar o saque dessa quantia, seu valor será arredondado!");
        break;
        }
    }while(valor !=0);
    document.getElementById("n1").innerHTML = ("Notas de R$ 100:" + nota100);
    document.getElementById("n2").innerHTML = ("Notas de R$50:" + nota50);
    document.getElementById("n3").innerHTML = ("Notas de R$ 10:" + nota10);
}
