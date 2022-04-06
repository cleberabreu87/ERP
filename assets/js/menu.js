toggler = document.getElementsByClassName("item-menu");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".aninhado").classList.toggle("menuativo");
        this.classList.toggle("submenu-down");
    });
}

toggler = document.getElementsByClassName("submenu");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".aninhado").classList.toggle("menuativo");
        this.classList.toggle("submenu-down");
    });
}

document.getElementById("cadastro-pessoas").addEventListener("click", () => {
    document.getElementById("tela-principal").src = "cadastro-pessoas.html";
    document.querySelector("#cadastro-pessoas").classList.add("tela-ativa");
});

document.getElementById("cadastro-animais").addEventListener("click", () => {
    document.getElementById("tela-principal").src = "cadastro-animais.html";
    document.querySelector("#cadastro-pessoas").classList.remove("tela-ativa");
});