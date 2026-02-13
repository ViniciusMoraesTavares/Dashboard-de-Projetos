document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const senha = document.getElementById('senha');
    const confirmaSenha = document.getElementById('confirmaSenha');
    const checkboxTermos = document.getElementById('aceitarTermos');
  
    form.addEventListener('submit', function(event){
      if (senha.value !== confirmaSenha.value){
        event.preventDefault(); 
        alert('As senhas não coincidem. Por favor, verifique.');
        return false;
      }
  
      if (!checkboxTermos.checked){
        event.preventDefault();
        alert('Você deve aceitar os Termos de Uso.');
        return false;
      }
    });
  });