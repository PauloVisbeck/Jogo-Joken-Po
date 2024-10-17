let result = document.getElementById("resultado");
let pcScore = document.getElementById("pc-score")
let meuScore = document.getElementById("meu-score")
meusPontos = 0;
pontosPC = 0;


function opccaoRandomico() {
    // Construção do random entre 1 e 3
    let valorRandom = Math.random();    
    let vlr = Math.floor((valorRandom * 3) + 1);
    if (vlr === 1) {
        return "Pedra";
    }
    else if (vlr === 2) {
        return "Papel";
    }
    else if (vlr === 3) {
        return "Tesoura";
    }    
}


function jogadaPedra() {
    const jogadaPC = opccaoRandomico();
    if (jogadaPC === "Pedra") {
        result.textContent = "Jogada Empatada... Ambos escolheram Pedra";
    }
    else if (jogadaPC === "Papel") {
        result.textContent = "Você perdeu... Você escolheu Pedra e o PC escolheu Papel";
        pontosPC++;
        pcScore.textContent = pontosPC;
    }
    else if (jogadaPC === "Tesoura") {
        result.textContent = "Você ganhou... Você escolheu Pedra e o PC escolheu Tesoura";
        meusPontos++;
        meuScore.textContent = meusPontos; 
    }
    console.log(jogadaPC)
}

function jogadaPapel() {
    const jogadaPC = opccaoRandomico();
    if (jogadaPC === "Pedra") {
        result.textContent = "Você ganhou... Você escolheu Papel e o PC escolheu Pedra";
        meusPontos++;
        meuScore.textContent = meusPontos; 
    }
    else if (jogadaPC === "Papel") {
        result.textContent = "Jogada Empatada... Ambos escolheram Papel";        
    }
    else if (jogadaPC === "Tesoura") {
        result.textContent = "Você perdeu... Você escolheu Papel e o PC escolheu Tesoura";
        pontosPC++;
        pcScore.textContent = pontosPC;
    }
    console.log(jogadaPC)
}

function jogadaTesoura() {
    const jogadaPC = opccaoRandomico();
    if (jogadaPC === "Papel") {
        result.textContent = "Você ganhou... Você escolheu Tesoura e o PC escolheu Papel";
        meusPontos++;
        meuScore.textContent = meusPontos; 
    }
    else if (jogadaPC === "Tesoura") {
        result.textContent = "Jogada Empatada... Ambos escolheram Tesoura";        
    }
    else if (jogadaPC === "Pedra") {
        result.textContent = "Você perdeu... Você escolheu Tesoura e o PC escolheu Pedra";
        pontosPC++;
        pcScore.textContent = pontosPC;
    }
    console.log(jogadaPC)
}
