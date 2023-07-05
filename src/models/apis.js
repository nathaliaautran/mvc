import mongoose from "mongoose";

//variavel que vai conectar a estrutura de dados
// apiSchema - esquema dos dadod que vamos modelar

const apiSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        pais: { type: String, required: true },
        ranking: { type: String, required: true}
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;