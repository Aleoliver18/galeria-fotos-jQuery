$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('.clear').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoImagem = $('#endereco-imagem').val()
        const novoItem = $('<li style="display: none;"></li>')

        $(`<img src="${enderecoImagem}">`).appendTo(novoItem)
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoImagem}" target="_blank">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(500)
        $('#endereco-imagem').val('')
    })
})