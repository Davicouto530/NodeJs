//Criando um mini servidor com NodeJs

// Importando o módulo HTTP do Node.js, que permite criar servidores web
const http = require('http');

// Criando um servidor HTTP
http.createServer((requisicao, resposta) => {

    // Configura o cabeçalho da resposta HTTP
    // 200 é o código de sucesso
    // 'Content-Type' define o tipo de conteúdo (nesse caso, texto simples)
    resposta.writeHead(200, { 'Content-Type': 'text/plain' });

    // Envia o conteúdo que será mostrado no navegador
    resposta.write('CFB Cursos\nCurso de NodeJS');

    // Finaliza a resposta
    resposta.end();

    // O servidor vai escutar (ficar ativo) na porta 1337
}).listen(1337);

/*
    COMO USAR ESSE SERVIDOR PASSO A PASSO:

    Salve o arquivo com a extensão .js  
        - Exemplo: servidor.js
        - Esse é o código do seu mini servidor em Node.js

    Abra o terminal na pasta onde o arquivo está salvo  
        - No Windows:
            a) Vá até a pasta onde você salvou o arquivo
            b) Clique com o botão direito dentro da pasta (mas fora dos arquivos)
            c) Escolha a opção "Abrir no Terminal" ou "Abrir no Prompt de Comando"
        - Ou abra o terminal manualmente e use o comando:
            cd caminho/da/sua/pasta
            (ex: cd C:\Users\SeuNome\Projetos)

    Rode o servidor com o Node.js  
        - Digite no terminal:
            node servidor.js
        - Isso vai iniciar o servidor na porta 1337

    Acesse o servidor no navegador  
        - Abra seu navegador
        - Digite na barra de endereço:
            http://127.0.0.1:1337
        - Esse endereço representa o seu próprio computador (localhost) na porta 1337
        - Você verá a mensagem:
            CFB Cursos
            Curso de NodeJS

    Pronto! Você criou seu primeiro servidor com Node.js funcionando no navegador.

    Para parar o servidor:
        - No terminal, pressione: Ctrl + C
*/

