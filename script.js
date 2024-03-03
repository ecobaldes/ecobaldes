function mudarImagem(nomeImagem) {
    var imagem = document.getElementById('imagemPrincipal');
    imagem.style.opacity = '0';
    setTimeout(function() {
        imagem.src = nomeImagem;
        imagem.style.opacity = '1';
    }, 400);
    document.getElementById('imagemPrincipal').src = nomeImagem;
}
 


