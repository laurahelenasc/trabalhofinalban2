const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");

router.post("/", async (req, res) => {
  const animal = await Animal.create(req.body);
  res.status(201).json(animal);
});

router.get("/", async (req, res) => {
  const animais = await Animal.find();
  res.json(animais);
});

module.exports = router;

