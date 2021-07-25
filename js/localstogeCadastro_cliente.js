const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let dados = {
       nome,
       cpf,
       endereco,
       telefone,
       email,
    }     
    let convertDados = JSON.stringify(dados);
    
    localStorage.setItem('lead', convertDados);
});