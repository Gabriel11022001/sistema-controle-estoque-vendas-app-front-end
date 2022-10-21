function apresentarAlerta() {
    let alerta = $('.alerta');
    alerta.removeClass('desativado');
    alerta.addClass('ativo');
}
function esconderAlerta() {
    let alerta = $('.alerta');
    alerta.removeClass('ativo');
    alerta.addClass('desativado');
}
$('#btn-fechar-alerta').click(function () {
    esconderAlerta();
});