import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:nico123@cluster0.tcahxsu.mongodb.net/"); // A função connect guarda a string de conexao dentro dos parênteses.

let db = mongoose.connection; // agora criamos uma  variável que guarda a ação de conectar nosso usuário com o mongodb.

export default db;