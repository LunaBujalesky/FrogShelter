console.log("🐸 SOY EL SERVER DE FROGSHELTER");

const express = require("express");
const path = require("path");

const app = express();

const adoptionRouter = require("./routes/adoption.router");

// Archivos públicos (HTML, CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/adoptions", adoptionRouter);

console.log("Router cargado");

//app.listen(3000, () => {
//  console.log("Server running on port 3000");
//});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;