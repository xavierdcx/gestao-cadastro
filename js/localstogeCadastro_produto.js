const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    let nomePorduto = document.getElementById('nomeProduto').value;
    let preco = document.getElementById('preco').value;
    let quantidade = document.getElementById('quantidade').value;
    let dados = {
       nomePorduto,
       preco,
       quantidade,
    }     
    let convertDados = JSON.stringify(dados);
    
    localStorage.setItem('lead', convertDados);
    
});
