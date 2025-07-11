const mongoose = require("mongoose");

const adocaoSchema = new mongoose.Schema({
  usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  animal_id: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" },
  data_adocao: Date
});

module.exports = mongoose.model("Adocao", adocaoSchema);

