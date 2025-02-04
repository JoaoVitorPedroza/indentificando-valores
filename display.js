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
    var verificar = lista.length;
    var last = lista[lista.length - 1];
    var first = lista[0];
    var soma = 0;
    for(let pos in lista){
        soma += lista[pos];
    }
    var dividendo = lista.length;
    var media = soma / dividendo;

    var info_valor = document.getElementById("info_valor");
    var quantidade = document.getElementById("quantidade");
    var menor_valor = document.getElementById("menor_valor");
    var soma_valores = document.getElementById("soma_valores");
    var média_dos_valores = document.getElementById("média_dos_valores");

    quantidade.textContent = `Elementos Digitados: ${verificar}`;
    info_valor.textContent = `O último valor da lista é ${last}`;
    menor_valor.textContent = `O menor valor da lista é ${first}`;
    soma_valores.textContent = `A soma dos valores é ${soma}`;
    média_dos_valores.textContent = `A média dos valores é ${media}`;

    var lista_valores = document.getElementById("flista");
    lista_valores.innerHTML = ""; // Limpa a lista antes de adicionar os valores
    for (let i = 0; i < lista.length; i++) {
        let option = document.createElement("option");
        option.text = lista[i];
        lista_valores.add(option);
    }
}
