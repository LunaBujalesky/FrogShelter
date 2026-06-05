console.log("🐸 SOY EL SERVER DE FROGSHELTER");
const express = require("express");

const app = express();

const adoptionRouter = require("./routes/adoption.router");

app.use("/api/adoptions", adoptionRouter);
console.log("Router cargado");
app.listen(3000, () => {
  console.log("Server running on port 3000");
});