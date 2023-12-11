function myFunction(){
    let p = document.getElementById("nom").value;
    const palavras = p.split(" ");
    let p1 = palavras[0];
    p1 = p1.substr(0,1);
    let p2 = palavras[1];
    p2 = p2.substr(0,1);
    let p3 = palavras[2];
    document.getElementById("nome").textContent = "Citação Bibliográfica: " + p3 + ", " + p1 + "." + p2;
}