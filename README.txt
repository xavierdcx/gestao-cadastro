/* Criado uma constante para receber os dados do formulario*/
const form = document.getElementById('form')

/*Em seguinda essa constante chamar a função addEventListener onde sua principal função é carregar
uma rotina quando o botão submit é pressionado e nesse caso executa a função preventDefault*/
form.addEventListener('submit', (e) => {
    
    e.preventDefault();
/* Em sequencia foram criadas 5 variaveis para receber os valores que vem do formulario e são
adicionados a uma varivel json*/    
    
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
/*Depois disso os dados passaram para conversão de json para strings para serem armazenados 
no localStorage com o metodo setItem() que pega essa variavel convertida e adiciona ao LocalStorage*/     
    let convertDados = JSON.stringify(dados);
    
    localStorage.setItem('lead', convertDados);
});