function mostraResposta (card){
    const resposta = card.querySelector('.cartao_conteudo__resposta');
    if (resposta.style.display === 'none'){
        resposta.style.display = 'block';
    }
    else{
        resposta.style.display = 'none'
    }
}