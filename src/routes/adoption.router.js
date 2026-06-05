console.log("Adoption router cargado");
const express = require("express");
const router = express.Router();

const frogs = require("../data/frogs");

router.get("/", (req, res) => {
  res.json(frogs);
});

module.exports = router;