async function loadFrogs() {

  const response = await fetch("/api/adoptions");
  const frogs = await response.json();

  const container = document.getElementById("frog-container");

  container.innerHTML = "";

  frogs.forEach(frog => {

    container.innerHTML += `
      <div class="frog-card">
        <h2>${frog.name}</h2>
        <p>${frog.species}</p>
        <p>Estado: ${frog.stage}</p>
        <p>${frog.adopted ? "🏡 Adoptada" : "🥚 Disponible"}</p>

        <button onclick="adoptFrog(${frog.id})">
          Adoptar
        </button>

        <button onclick="evolveFrog(${frog.id})">
          Evolucionar
        </button>

      </div>
    `;
  });
}

async function adoptFrog(id) {

  await fetch(`/api/adoptions/${id}`, {
    method: "POST"
  });

  loadFrogs();
}

async function evolveFrog(id) {

  await fetch(`/api/adoptions/${id}/evolve`, {
    method: "POST"
  });

  loadFrogs();
}

loadFrogs();