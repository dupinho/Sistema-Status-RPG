const inputSenha = document.getElementById('senha');
const reqMaiuscula = document.getElementById('req-maiuscula');
const reqMinuscula = document.getElementById('req-minuscula');
const reqTamanho = document.getElementById('req-tamanho');
const reqEspecial = document.getElementById('req-especial');
const reqNumero = document.getElementById('req-numero');

inputSenha.addEventListener('input', function(){
    const senha = inputSenha.value;

    let senhaMaiuscula = senha.toUpperCase();
    if(senha == senhaMaiuscula){
        reqMinuscula.style.color = "red";
    }
    else{
        reqMinuscula.style.color = "green";
    }

    let senhaMinuscula = senha.toLowerCase();
    if(senha == senhaMinuscula){
        reqMaiuscula.style.color = "red";
    }
    else{
        reqMaiuscula.style.color = "green";
    }

    if(senha.length < 8){
        reqTamanho.style.color = "red";
    }
    else{
        reqTamanho.style.color = "green";
    }

    if(/[^A-Za-z0-9]/.test(senha)){
        reqEspecial.style.color = "green";
    }
    else{
        reqEspecial.style.color = "red";
    }

    if(/[0-9]/.test(senha)){
        reqNumero.style.color = "green";
    }
    else{
        reqNumero.style.color = "red";
    }

});