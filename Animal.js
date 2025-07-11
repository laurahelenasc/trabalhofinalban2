const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  nome: String,
  porte: String,
  data_nascimento: Date,
  especie: String,
  raca: String,
  sexo: String,
  status: String,
  descricao: String
});

module.exports = mongoose.model("Animal", animalSchema);

