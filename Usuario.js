const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  endereco: String,
  cpf: String,
  data_nascimento: Date
});

module.exports = mongoose.model("Usuario", usuarioSchema);

