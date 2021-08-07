// Importacao de biblioteca
import {parse} from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs'; 
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Definicao da porta
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true); 

    var resposta;

    // Receber informações do usuario
    const params = parse(urlparse.search ? urlparse.search : '');

    // Criar um usuario - Atualizar um usuario
    if(urlparse.pathname == '/criar-atualizar-usuario'){

    // Salvar as informações
   writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
    if (err) throw err;
    console.log('saved');

    resposta = "Usuario criado/atualizado com sucesso";

    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.end('resposta'); 
    });
  }       
  response.end("ola");
});

// Execucao
server.listen( port, () => {
    console.log(`Server running on port ${port}`);
});

//localhost:5000/criar-atualizar-usuario?id=3&nome=erick