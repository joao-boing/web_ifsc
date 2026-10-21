const botao = document.getElementById("botao");

const botaoCor = document.getElementById("botaoCor");

botaoCor.addEventListener("click", function () {
    const numero = Math.floor(Math.random() * 16777216);
    const cor = "#" + numero.toString(16).padStart(6, "0");

    document.body.style.backgroundColor = cor;
});

botao.addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("idPeso").value.replace(",", "."));
    const altura = parseFloat(document.getElementById("idAltura").value.replace(",", "."));
    const resultado = document.getElementById("resultado");
    const imagem = document.getElementById("imagemImc");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Preencha peso e altura com valores válidos.";
        imagem.style.display = "none";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao;
    let arquivo;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        arquivo = "magro.webp";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        arquivo = "normal.webp";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        arquivo = "sobrepeso.jpg";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
        arquivo = "obesidade1patrick.png";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
        arquivo = "obesidade2shrek.png";
    } else {
        classificacao = "Obesidade grau III";
        arquivo = "obesidadecbum.jpg";
    }

    resultado.textContent = "Seu IMC é " + imc.toFixed(2) + " (" + classificacao + ")";

    imagem.src = "images/" + arquivo;
    imagem.style.display = "block";
});