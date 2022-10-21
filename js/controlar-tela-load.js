function carregarTelaLoad() {
    let telaLoad = $('.load');
    telaLoad.removeClass('inativo');
    telaLoad.addClass('ativo');
    setTimeout(function () {
        telaLoad.removeClass('ativo');
        telaLoad.addClass('inativo');
    }, 2500);
}
carregarTelaLoad();