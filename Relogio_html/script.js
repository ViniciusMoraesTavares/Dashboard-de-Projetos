$(document).ready(function() {
    // Função para obter a data e hora atual de Brasília
    function getHoraBrasilia() {
        const agora = new Date();
        const options = { timeZone: 'America/Sao_Paulo' };
        const horaBrasilia = agora.toLocaleTimeString('pt-BR', options);
        return horaBrasilia;
    }

    // Função para exibir a hora de Brasília
    function exibirHoraBrasilia() {
        const relogioBrasilia = document.getElementById('relogio-brasilia');
        relogioBrasilia.textContent = 'Brasília: ' + getHoraBrasilia();
    }

    // Função para exibir a hora do fuso horário selecionado
    function exibirHoraFuso() {
        const fusoSelecionado = $('#fusoHorario').val();
        const agora = new Date();
        const options = { timeZone: fusoSelecionado };
        const horaFuso = agora.toLocaleTimeString('en-US', options);

        const relogioFuso = document.getElementById('relogio-fuso');
        relogioFuso.textContent = fusoSelecionado + ': ' + horaFuso;
    }

    // Atualizar a hora de Brasília a cada segundo
    setInterval(exibirHoraBrasilia, 1000);

    // Inicializar o select2
    $('.js-select2').select2();

    // Atualizar a hora do fuso horário selecionado quando houver uma mudança na seleção
    $('#fusoHorario').on('change', exibirHoraFuso);
});
