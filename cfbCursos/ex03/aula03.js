// Criando rotas no servidor NodeJs

// Importa o módulo 'http' do Node.js, que permite criar servidores web
const http = require('http');

// Define a porta que o servidor vai escutar
const porta = 3000;

// Define o endereço (host) onde o servidor vai rodar (localhost)
const host = "127.0.0.1";

// Cria o servidor HTTP
const servidor = http.createServer((req, res) => {
    // Define o cabeçalho da resposta, com status 200 (OK) e tipo de conteúdo HTML
    res.writeHead(200, {'Content-Type':'text/html'});

    // Verifica a URL requisitada e envia uma resposta diferente para cada rota
    if(req.url == '/') {
        // Rota principal (home)
        res.write('<h1>Seja bem vindo</h1>');
    } else if(req.url == '/canal') {
        // Rota /canal
        res.write('<h1>CFB Cursos</h1>');
    } else if(req.url == '/curso') {
        // Rota /curso
        res.write('<h1>Conehça os cursos do nosso canal</h1>');
    } else if(req.url == '/curso/node') {
        // Rota /curso/node
        res.write('<h1>Curso de NodeJS</h1>');
    }

    // Finaliza a resposta
    res.end();
});

// Faz o servidor escutar na porta e host definidos, e exibe mensagem no terminal quando estiver rodando
servidor.listen(porta, host, () => {
    console.log('Servidor rodando!');
});
