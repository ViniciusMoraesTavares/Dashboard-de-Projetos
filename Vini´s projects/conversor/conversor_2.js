function converterTemperatura() {
    const tipoConversao = document.getElementById('tipo-conversao').value;
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    let resultado = 0;

    if (tipoConversao === 'celsius') {
        resultado = (temperatura * 9/5) + 32;
    } else if (tipoConversao === 'fahrenheit') {
        resultado = (temperatura - 32) * 5/9;
    }

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado} graus`;
}
