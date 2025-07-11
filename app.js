const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/adopet")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

app.use("/usuarios", require("./routes/usuarios"));
app.use("/animais", require("./routes/animais"));
app.use("/adocoes", require("./routes/adocoes"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

