// Criando rotas no servidor NodeJs

// Importa o módulo 'http' do Node.js, usado para criar o servidor
const http = require('http');

// Importa o módulo 'url', que permite trabalhar com URLs (como pegar parâmetros da query string)
const url = require('url');

// Define a porta que o servidor vai escutar
const porta = 3000;

// Define o endereço (host) onde o servidor vai rodar (localhost)
const host = "127.0.0.1";

// Cria o servidor HTTP
const servidor = http.createServer((req, res) => {
    // Define o cabeçalho da resposta: status 200 (OK) e conteúdo no formato HTML
    res.writeHead(200, {'Content-Type':'text/html'});

    // Escreve na tela a URL completa que foi acessada (incluindo os parâmetros da query)
    res.write(req.url);

    // Faz o parse da URL usando o método parse do módulo 'url'
    // O segundo argumento "true" indica que a query string será convertida em um objeto
    const p = url.parse(req.url, true).query;

    // Exibe o valor do parâmetro "nome" da URL 
    res.write('<br/>' + p.nome);

    // Exibe o valor do parâmetro "curso" da URL 
    res.write('<br/>' + p.curso);

    // Finaliza a resposta
    res.end();
});

// Faz o servidor escutar na porta e host definidos e mostra mensagem no terminal quando estiver rodando
servidor.listen(porta, host, () => {
    console.log('Servidor rodando!');
});
