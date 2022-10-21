$('#btn-cadastrar-categoria').click(function (e) {
    e.preventDefault();
    let id = 0;
    let descricao = $('#descricao').val();
    let status = $('#status').val();
    let categoriaJson = {
        id: id,
        descricao: descricao,
        status: status 
    };
    categoriaJson = JSON.stringify(categoriaJson);
    $.ajax({
        url: 'http://localhost:8080/api/categoria-produto',
        type: 'post',
        contentType: 'application/json; charset=UTF-8',
        data: categoriaJson,
        success: function (resposta) {
            carregarTelaLoad();
            // Controlar para mostrar o alerta após 2510 milesegundos
            setTimeout(function () {
                apresentarAlerta();
                let alertaMensagem = $('.mensagem-alerta');
                alertaMensagem.text('');
                if (resposta.status === 201) { // Sucesso em cadastrar a categoria
                    alertaMensagem.removeClass('msg-erro');
                    alertaMensagem.addClass('msg-sucesso');
                    alertaMensagem.text('Categoria cadastrada com sucesso!');
                } else { // Falha em cadastrar a categoria
                    alertaMensagem.removeClass('msg-sucesso');
                    alertaMensagem.addClass('msg-erro');
                    alertaMensagem.text(resposta.conteudo);
                }
            }, 2510);
        }
    });
});