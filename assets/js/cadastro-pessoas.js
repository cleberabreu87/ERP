//Deixa visível apenas os campos de pessoa física no carregamento (Padrão)
window.onload = function () {
    let esconder = ["razao-social", "nome-fantasia", "procurar-pessoa-razao-social", "btn-procurar-pessoa-razao-social", "procurar-pessoa-nome-fantasia", "btn-procurar-pessoa-nome-fantasia"].forEach(x => document.getElementById(x).style.display = "none");
};

//Muda os campos dependendo da pessoa (física, jurídica ou outros)
document.getElementById("pessoa").getElementsByTagName("select")[0], addEventListener("change", function () {
    if (document.getElementById("pessoa").getElementsByTagName("select")[0].value == "Física") {
        let físicaVisivel = ["nome", "documento1", "documento2", "data-nascimento"].forEach(x => document.getElementById(x).style.display = "");
        let físicaInvisivel = ["razao-social", "nome-fantasia"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("documento1").getElementsByTagName("label")[0].textContent = "CPF: *";
        document.getElementById("documento1").getElementsByTagName("input")[0].placeholder = "___.___.___-__"
        document.getElementById("documento2").getElementsByTagName("label")[0].textContent = "RG: ";
    }
    else if (document.getElementById("pessoa").getElementsByTagName("select")[0].value == "Jurídica") {
        let juridicaVisivel = ["razao-social", "nome-fantasia", "documento1", "documento2"].forEach(x => document.getElementById(x).style.display = "");
        let juridicaInvisivel = ["nome", "data-nascimento"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("documento1").getElementsByTagName("label")[0].textContent = "CNPJ: *";
        document.getElementById("documento1").getElementsByTagName("input")[0].placeholder = "__.___.___/____-__"
        document.getElementById("documento2").getElementsByTagName("label")[0].textContent = "IE: *";
    }
    else if (document.getElementById("pessoa").getElementsByTagName("select")[0].value == "Outros") {
        let outrosVisivel = ["nome", "documento1", "documento2"].forEach(x => document.getElementById(x).style.display = "");
        let outrosInvisivel = ["razao-social", "nome-fantasia", "data-nascimento"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("documento1").getElementsByTagName("label")[0].textContent = "Documento 1: *";
        document.getElementById("documento1").getElementsByTagName("input")[0].placeholder = ""
        document.getElementById("documento2").getElementsByTagName("label")[0].textContent = "Documento 2: ";
    }
});

//Permite apenas números ao digitar no campo de documento1
document.getElementById("documento1").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("documento1").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("documento1").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("documento1").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Aplica máscara de CPF ou CNPJ no documento1
document.getElementById("documento1").getElementsByTagName("input")[0].addEventListener("keydown", function (event) {
    if (document.getElementById("pessoa").getElementsByTagName("select")[0].value == "Física") {
        document.getElementById("documento1").getElementsByTagName("input")[0].maxLength = 14;
        if (event.keyCode != 46 && event.keyCode != 8) {
            var i = document.getElementById("documento1").getElementsByTagName("input")[0].value.length;
            if (i === 3 || i === 7)
                document.getElementById("documento1").getElementsByTagName("input")[0].value = document.getElementById("documento1").getElementsByTagName("input")[0].value + ".";
            else if (i === 11)
                document.getElementById("documento1").getElementsByTagName("input")[0].value = document.getElementById("documento1").getElementsByTagName("input")[0].value + "-";
        }
    }
    else if (document.getElementById("pessoa").getElementsByTagName("select")[0].value == "Jurídica") {
        document.getElementById("documento1").getElementsByTagName("input")[0].maxLength = 18;
        if (event.keyCode != 46 && event.keyCode != 8) {
            var i = document.getElementById("documento1").getElementsByTagName("input")[0].value.length;
            if (i === 2 || i === 6)
                document.getElementById("documento1").getElementsByTagName("input")[0].value = document.getElementById("documento1").getElementsByTagName("input")[0].value + ".";
            else if (i === 10)
                document.getElementById("documento1").getElementsByTagName("input")[0].value = document.getElementById("documento1").getElementsByTagName("input")[0].value + "/";
            else if (i === 15)
                document.getElementById("documento1").getElementsByTagName("input")[0].value = document.getElementById("documento1").getElementsByTagName("input")[0].value + "-";
        }
    }
});

//Bloquear o campo número se o checkbox "S/N" estiver marcado
document.getElementById("sem-numero").getElementsByTagName("input")[0].addEventListener("change", function () {
    if (document.getElementById("sem-numero").getElementsByTagName("input")[0].checked) {
        document.getElementById("numero").getElementsByTagName("input")[0].disabled = true;
    } else {
        document.getElementById("numero").getElementsByTagName("input")[0].disabled = false;
    }
});

//Permite apenas números ao digitar no CEP
document.getElementById("cep").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("cep").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("cep").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("cep").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Aplica máscara de CEP
document.getElementById("cep").getElementsByTagName("input")[0].addEventListener("keydown", function (event) {
    if (event.keyCode != 46 && event.keyCode != 8) {
        var i = document.getElementById("cep").getElementsByTagName("input")[0].value.length;
        if (i === 5)
            document.getElementById("cep").getElementsByTagName("input")[0].value = document.getElementById("cep").getElementsByTagName("input")[0].value + "-";
    }
});

//Permite apenas números ao digitar o número
document.getElementById("numero").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("numero").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("numero").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("numero").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Permite apenas números ao digitar o telefone
document.getElementById("telefone").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("telefone").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("telefone").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("telefone").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Aplica máscara de telefone
document.getElementById("telefone").getElementsByTagName("input")[0].addEventListener("keydown", function (event) {
    if (event.keyCode != 46 && event.keyCode != 8) {
        var i = document.getElementById("telefone").getElementsByTagName("input")[0].value.length;
        if (i === 0)
            document.getElementById("telefone").getElementsByTagName("input")[0].value = document.getElementById("telefone").getElementsByTagName("input")[0].value + "(";
        else if (i === 3)
            document.getElementById("telefone").getElementsByTagName("input")[0].value = document.getElementById("telefone").getElementsByTagName("input")[0].value + ") ";
        else if (i === 9)
            document.getElementById("telefone").getElementsByTagName("input")[0].value = document.getElementById("telefone").getElementsByTagName("input")[0].value + "-";
    }
});

//Permite apenas números ao digitar o celular
document.getElementById("celular").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("celular").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("celular").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("celular").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Aplica máscara de celular
document.getElementById("celular").getElementsByTagName("input")[0].addEventListener("keydown", function (event) {
    if (event.keyCode != 46 && event.keyCode != 8) {
        var i = document.getElementById("celular").getElementsByTagName("input")[0].value.length;
        if (i === 0)
            document.getElementById("celular").getElementsByTagName("input")[0].value = document.getElementById("celular").getElementsByTagName("input")[0].value + "(";
        else if (i === 3)
            document.getElementById("celular").getElementsByTagName("input")[0].value = document.getElementById("celular").getElementsByTagName("input")[0].value + ") ";
        else if (i === 10)
            document.getElementById("celular").getElementsByTagName("input")[0].value = document.getElementById("celular").getElementsByTagName("input")[0].value + "-";
    }
});

//Comandos e Formatações no modal Procurar Pessoa
document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0], addEventListener("change", function () {
    if (document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0].value == "Física") {
        let físicaVisivel = ["procurar-pessoa-nome", "btn-procurar-pessoa-nome", "procurar-pessoa-documento1", "btn-procurar-pessoa-documento1"].forEach(x => document.getElementById(x).style.display = "");
        let físicaInvisivel = ["procurar-pessoa-razao-social", "btn-procurar-pessoa-razao-social", "procurar-pessoa-nome-fantasia", "btn-procurar-pessoa-nome-fantasia"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("label")[0].textContent = "CPF:";
    }
    else if (document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0].value == "Jurídica") {
        let juridicaVisivel = ["procurar-pessoa-documento1", "procurar-pessoa-razao-social", "btn-procurar-pessoa-razao-social", "procurar-pessoa-nome-fantasia", "btn-procurar-pessoa-nome-fantasia"].forEach(x => document.getElementById(x).style.display = "");
        let juridicaInvisivel = ["procurar-pessoa-nome", "btn-procurar-pessoa-nome"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("label")[0].textContent = "CNPJ:";
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].placeholder = "__.___.___/____-__"
    }
    else if (document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0].value == "Outros") {
        let outrosVisivel = ["procurar-pessoa-nome", "btn-procurar-pessoa-nome", "procurar-pessoa-documento1", "btn-procurar-pessoa-documento1"].forEach(x => document.getElementById(x).style.display = "");
        let outrosInvisivel = ["procurar-pessoa-razao-social", "btn-procurar-pessoa-razao-social", "procurar-pessoa-nome-fantasia", "btn-procurar-pessoa-nome-fantasia"].forEach(x => document.getElementById(x).style.display = "none");
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("label")[0].textContent = "Documento 1:";
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].placeholder = ""
    }
});

//Permite apenas números ao digitar em "Procurar Pessoa"
document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].addEventListener("input", function () {
    var i = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value.length;
    var str = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value
    if (isNaN(Number(str.charAt(i - 1)))) {
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = str.substr(0, i - 1)
    }
});

//Aplica mascara de CPF ou CNPJ em "Procurar Pessoa"
document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].addEventListener("keydown", function (event) {
    if (document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0].value == "Física") {
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].maxLength = 14;
        if (event.keyCode != 46 && event.keyCode != 8) {
            var i = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value.length;
            if (i === 3 || i === 7)
                document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value + ".";
            else if (i === 11)
                document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value + "-";
        }
    }
    else if (document.getElementById("procurar-pessoa-select").getElementsByTagName("select")[0].value == "Jurídica") {
        document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].maxLength = 18;
        if (event.keyCode != 46 && event.keyCode != 8) {
            var i = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value.length;
            if (i === 2 || i === 6)
                document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value + ".";
            else if (i === 10)
                document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value + "/";
            else if (i === 15)
                document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value = document.getElementById("procurar-pessoa-documento1").getElementsByTagName("input")[0].value + "-";
        }
    }
});

//Integração com a API Via Cep
const preencherCampos = (endereco) => {
    document.getElementById("endereco").getElementsByTagName("input")[0].value = endereco.logradouro
    document.getElementById("bairro").getElementsByTagName("input")[0].value = endereco.bairro
    document.getElementById("cidade").getElementsByTagName("input")[0].value = endereco.localidade
    document.getElementById("estado").getElementsByTagName("select")[0].value = endereco.uf
}

const pesquisarCep = async () => {
    const cep = document.getElementById("cep").getElementsByTagName("input")[0].value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
        alert("CEP não localizado!")
    } else {
        preencherCampos(endereco)
    }
}

//Procura o endereço ao perder o foco no CEP
document.getElementById("cep").getElementsByTagName("input")[0].addEventListener("focusout", pesquisarCep)

//Modal "Procurar Pessoa"
var modal = document.getElementById("modal-procurar-pessoa");
var btn = document.getElementById("procurar-pessoa");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}