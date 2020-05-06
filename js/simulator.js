function get_value(key) {
    var values = {
        "": [0, ""],
        "acompanhamento": [5000, 'R$ 5.000,00'],
        "fisioterapia": [6500, 'R$ 6.500,00'],
        "pediatra": [4800, 'R$ 4.800'],
        "cirurgia_estetica": [30000, "R$ 30.000,00"],
        "cirurgia": [40000, "R$ 40.000,00"],
        "dentista_estetica": [20000, "R$20.000,00"],
        "dentista": [12000, "R$ 12.000,00"],
        "psico": [6000, "R$ 6.000,00"]
    };

    return values[key];
}

$('#combobox').on('change', function(e) {
    $('#valor_procedimento').text("");
    $('#legenda_valor').text("");
    $('#valor').val(0);
    $('#valor_procedimento').text(get_value(this.value)[1]);
    $('#valor').val(get_value(this.value)[0]);
    set_valor();
    $('#legenda_valor').text(" - valor para referência");
});

var slider = document.getElementById("parcela");
var output = document.getElementById("legenda_parcela");
output.innerHTML = slider.value + "x"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    parcelas = this.value
    output.innerHTML = parcelas + "x";
    set_valor();
}

function set_valor() {
    parcelas = $('#parcela').val();
    valor = $('#valor').val();
    taxa_juros = 0.02;
    valor_final = valor * Math.pow((1 + taxa_juros), parcelas);
    valor_parcela = valor_final / parcelas;
    cada_parcela = (valor_parcela).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
    $('#legenda_valor_final').text(cada_parcela);
}

$(document).ready(function() {
    $('.combobox').combobox()
});