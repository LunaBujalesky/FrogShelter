fetch("/api/adoptions")
  .then(response => response.json())
  .then(frogs => {

    const container = document.getElementById("frog-container");

    container.innerHTML = "";

    frogs.forEach(frog => {

      container.innerHTML += `
        <div class="frog-card">
          <h2>${frog.name}</h2>
          <p>${frog.species}</p>
          <p>Estado: ${frog.stage}</p>
          <p>${frog.adopted ? "🏡 Adoptada" : "🥚 Disponible"}</p>
        </div>
      `;

    });

  })
  .catch(error => {
    console.error(error);
  });