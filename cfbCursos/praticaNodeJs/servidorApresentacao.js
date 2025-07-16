// Mini sistema de apresentação

const http = require('http'); // usado para criar servidores web
const url = require('url'); // permite trabalhar com URLs (como pegar parâmetros da query string)
const porta = 4000; // Define a porta que o servidor vai escutar
const host = "127.0.0.1"; // Define o endereço (host) onde o servidor vai rodar (localhost)

// Cria o servidor http web
const servidor = http.createServer((req, res) => {
    // Define o cabeçalho da resposta: status 200 (OK) e conteúdo no formato HTML
    res.writeHead(200, { 'Content-Type': 'text/HTML' });

    // Colocando rotas para as url
    if (req.url == '/') {
        // Se o usuário acessar "http://127.0.0.1:4000/" vai mostrar essa msg
        res.write('<h1>Olá, visitante! Informe seu nome e curso na URL.</h1>')
    } else if (req.url == '/sobre') {
        // Se o usuário acessar "http://127.0.0.1:4000/sobre" vai mostrar essa msg
        res.write('<h1>Desenvolvido por Davi!</h1>')
    }

    res.write(req.url);// Escreve na tela a URL completa que foi acessada

    // Faz o parse da URL usando o método parse do módulo 'url'
    // O segundo argumento "true" indica que a query string será convertida em um objeto
    const p = url.parse(req.url, true).query;

    // Verifica se o nome e o curso na url foram passados
    if (p.nome == '' || p.curso == '') {
        // Se um dos dois não for passados, vai exibir essa mensagem na tela
        res.write('<h1>Faltam dados na URL!</h1>');
        res.write('<p>Você precisa informar ?nome=SeuNome&curso=SeuCurso</p>');
    } else {
        // Se forem passados, vai exibir o nome e o curso que o usuário colocar na url
        res.write(`<h1>Olá, ${p.nome}</h1><br/>`);
        res.write(`<h1>Vejo que você está fazendo o curso de ${p.curso}</h1><br/>`);
    }

    res.end();
})

servidor.listen(porta, host, () => {
    console.log('Servidor rodando!');
});