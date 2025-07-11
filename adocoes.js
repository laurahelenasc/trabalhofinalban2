const express = require("express");
const router = express.Router();
const Adocao = require("../models/Adocao");

router.post("/", async (req, res) => {
  const adocao = await Adocao.create(req.body);
  res.status(201).json(adocao);
});

router.get("/", async (req, res) => {
  const adocoes = await Adocao.find().populate("usuario_id").populate("animal_id");
  res.json(adocoes);
});

module.exports = router;

