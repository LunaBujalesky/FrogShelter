const express = require("express");
const router = express.Router();
const frogs = require("../data/frogs");

const STAGES = ["egg", "tadpole", "froglet", "adult"];

// GET /api/adoptions
// Devuelve todas las ranas no adoptadas
router.get("/", (req, res) => {
  const available = frogs.filter((frog) => frog.adopted === false);
  res.json(available);
});

// GET /api/adoptions/:id
// Devuelve una rana específica por id
router.get("/:id", (req, res) => {
  const frog = frogs.find((f) => f.id === parseInt(req.params.id));

  if (!frog) {
    return res.status(404).json({ error: "Frog not found" });
  }

  res.json(frog);
});

// POST /api/adoptions/:id
// Adopta una rana
router.post("/:id", (req, res) => {
  const frog = frogs.find((f) => f.id === parseInt(req.params.id));

  if (!frog) {
    return res.status(404).json({ error: "Frog not found" });
  }

  if (frog.adopted) {
    return res.status(400).json({ error: "Frog already adopted" });
  }

  frog.adopted = true;
  res.json({ message: "Frog adopted successfully", frog });
});

// POST /api/adoptions/:id/evolve
// Evoluciona una rana a la siguiente etapa
router.post("/:id/evolve", (req, res) => {
  const frog = frogs.find((f) => f.id === parseInt(req.params.id));

  if (!frog) {
    return res.status(404).json({ error: "Frog not found" });
  }

  const currentIndex = STAGES.indexOf(frog.stage);

  if (currentIndex === STAGES.length - 1) {
    return res.status(400).json({ error: "Frog is already fully evolved" });
  }

  frog.stage = STAGES[currentIndex + 1];
  res.json({ message: "Frog evolved successfully", frog });
});

module.exports = router;