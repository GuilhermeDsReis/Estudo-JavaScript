window.onload = function () {
  tratar_eventos();
  tocar_audio("abertura");
};

function tratar_eventos() {

  // Jogador clicou no botão começar/reiniciar jogo.
  document.getElementById("btn-comecar").onclick = function () {
    tocar_audio('comecar');
    document.getElementById("comecar").style.display = "none";
    document.getElementById("pergunta1000").style.display = "block";
    }

  //Analisar resposta da pergunta de R$ 1000
  document.getElementById("form-pergunta1000").onsubmit = function () {
    var opcao_correta = "3";
    var opcao_selecionada = this.pergunta1000.value;
  
    if(opcao_selecionada == opcao_correta){
        tocar_audio('pergunta-2000');
        document.getElementById("pergunta1000").style.display = "none";
        document.getElementById("pergunta2000").style.display = "block";
} else {
        document.getElementById("pergunta1000").style.display = "none";
        tocar_audio('errou');
        reiniciar_jogo();
    }
    return false;
}


    // Função caso o jogador perca.
    function reinicia_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}
}

    // Função para executar a voz do Silvio Santos, em cada um das ocasiões.
    function tocar_audio(qual_tocar) {
        // var audio = document.getElementById("silvio-santos");

        // switch(qual_tocar) {
        //     case 'abertura':
        //         audio.src="audio/abertura-show-do-milhao.mp3"
        //         break;
            
        //     case 'comecar':
        //         audio.src="audio/1000.wav"
        //         break;
        // }

        ""
    }