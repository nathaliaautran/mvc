import express, { json }from 'express'; 
import index from './routes/index.js';

const app = express(); // esta variável recebe o express, que será usada em outros arquivos

app.use(json()); // começo da coneção de acesso ao site
app.use("/", index); // funçao use para o usar o framework no formato json  segunda tela exibirá o index que criaremos uma pagina de boas vindas.  

export default app 