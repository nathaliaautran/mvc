import express, { json }from 'express'; 
import index from './routes/index.js';
import db from './config/dbConnect.js';

const app = express(); // esta variável recebe o express, que será usada em outros arquivos

app.use(json()); // começo da conexão de acesso ao site
app.use("/", index); // funçao use para o usar o framework no formato json, na tela exibirá o index que criaremos uma pagina de boas vindas.  

db.on("error", console.log.bind(console), 'Erro de conexão') // metodo que começa com o 'error' e depois mostra a conexao. 
db.once("open", () =>  { 
    console.log('Conexão com o banco feita com sucesso') //// Este outro metodo, once(estrutura diferente). usa uma função com a mensagem explicando/mostrando que a conexao deu certo
}); 

export default app 