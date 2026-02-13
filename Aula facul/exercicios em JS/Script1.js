let v1 = parseFloat(prompt('Informe o valor1:'));
let v2 = parseFloat(prompt('Informe o valor2:'));

if (v1 < 0 || v2 < 0) {
    alert('ERRO: Valor negativo inserido');
} else {
    let operador = prompt('Informe o operador:');
    let total = 0;

    if (operador === '+') {
        total = v1 + v2;
        alert('Soma dos valores: ' + total);
    } else if (operador === '-') {
        total = v1 - v2;
        alert('Subtração dos valores: ' + total);
    } else if (operador === '*') {
        total = v1 * v2;
        alert('Multiplicação dos valores: ' + total);
    } else if (operador === '/') {
        if (v2 !== 0) {
            total = v1 / v2;
            alert('Divisão dos valores: ' + total);
        } else {
            alert('ERRO: Divisão por zero');
        }
    } else {
        alert('Operador não informado!');
    }
}
