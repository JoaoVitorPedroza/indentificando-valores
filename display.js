let lista = [];

function adicionar() {
    let valores = document.getElementById("entrada").value;
    if (valores === "") {
        window.alert("Digite algo");
    } else {
        valores = Number(valores); 
        if (isNaN(valores)) {
            window.alert("Digite um número");
        } else if (valores < 1) {
            window.alert("Digite um número maior que 0");
        } else if (valores > 100) {
            window.alert("Digite um número menor que 100");
        } else {
            lista.push(valores);
            document.getElementById("entrada").value = ""; 
        }
    }
}

function mostrar() {
    lista.sort((a, b) => a - b); 
    var verificar = document.getElementById("verificar");
    verificar.innerHTML = lista.join(", "); 
}