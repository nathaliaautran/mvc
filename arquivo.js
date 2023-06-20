// Importando pacote de funcionalidade (biblioteca)

import chalk from 'chalk';
import fs from 'fs';

/*console.log(chalk.blue('cadastro válido'));
console.log(chalk.red('cadastro inválido'));
console.log(chalk.blue.red.bold('code'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
*/

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));

}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.blue(texto));
    })
}

//pegaArquivo('./arquivos/textoBiblioteca.md');
pegaArquivo('./biblioteca/texto.md');