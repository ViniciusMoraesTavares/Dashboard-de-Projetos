function checkMultipleChoiceAnswer(answer) {
    // Verifica se a resposta está correta
    if (answer === 'Lindo'){
        document.getElementById('multiple-choice-feedback').textContent = 'É TA CERTO...';
        document.getElementById('multiple-choice-feedback').style.color = 'green';
    } else {
        document.getElementById('multiple-choice-feedback').textContent = 'TBM TA CERTO';
        document.getElementById('multiple-choice-feedback').style.color = 'green';
    }

    // Desabilita os botões após a escolha
    let buttons = document.querySelectorAll('.section:nth-child(1) button');
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function checkFreeResponseAnswer() {
    // Obtém a resposta do usuário
    let userAnswer = document.getElementById('free-response-answer').value;

    // Verifica se a resposta está correta
    if (userAnswer.toLowerCase() === 'indo ali'){
        document.getElementById('free-response-feedback').textContent = 'we live, we love, we lie...';
        document.getElementById('free-response-feedback').style.color = 'green';
    } else {
        document.getElementById('free-response-feedback').textContent = 'ONDE?';
        document.getElementById('free-response-feedback').style.color = 'red';
    }

    // Desabilita o campo de input e o botão após a escolha
    document.getElementById('free-response-answer').disabled = true;
    document.querySelector('.section:nth-child(2) button').disabled = true;
}