let pontosLivres = 10;

const atributos = {
    forca: 0,
    destreza: 0,
    intelecto: 0,
};

const spanPontos = document.getElementById('pontos-livres');
const botoesMais = document.querySelectorAll('.btn-mais');

function alterar(nome, qtd){
    if(qtd === 1 && pontosLivres > 0){
        atributos[nome]++;
        pontosLivres--;
    }
    else if(qtd === -1 && atributos[nome] >= 0){
        atributos[nome]--;
        pontosLivres++;
    }
    else{
        return; //aqui só interrompe
    }

    atualizarInterface(nome);
}

function atualizarInterface(nome){
    spanPontos.textContent = pontosLivres;
    document.getElementById('val-' + nome).textContent = atributos[nome];

    const porcentagem = atributos[nome] * 10;
    document.getElementById('barra-' + nome).style.width = porcentagem + '%';
}