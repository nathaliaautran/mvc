import app from './src/app.js'; // importando o app

const port = 4000;

app.listen(port, () => { // listen = ouve o servidor em tempo remoto. vai dizer se o servidor esta ligado ou nao
    console.log(`Servidor esta rodando na porta ${port}`)
})  
