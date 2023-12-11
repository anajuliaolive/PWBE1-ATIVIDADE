function mySenha() {
    var senha = document.getElementById("senha").value;
    var letra = document.getElementById("letra");

    if(senha< 8){
        document.getElementById("letra").innerHTML = ("A senha deve conter no minímo 8 e 15 caracteres");
    }else if (senha >15){
        document.getElementById("letra").innerHTML = ("A senha deve conter no minímo 8 e 15 caracteres");
    }
    if (!senha.match(/[0-9]/g)) {
        document.getElementById("letra").innerHTML = ("A senha deve conter no minímo 1 número");
      }
    if (!senha.match(/[a-z]/g)) {
        document.getElementById("letra").innerHTML = ("A senha deve conter no minímo 1 letra minúscula");
      }
    if (!senha.match(/[A-Z]+2/g )) {
        document.getElementById("letra").innerHTML = ("A senha deve possuir no minímo 2 letras maiúsculas");
      }
    /*if (!senha.match(/?=.*[$*&@#]/g )) {
        document.getElementById("letra").innerHTML = ("A senha deve possuir no minímo 2 símbolo");
      }*/
}