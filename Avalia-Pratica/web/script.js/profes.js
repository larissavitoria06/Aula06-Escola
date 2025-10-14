// Verifica se o professor está logado
const usuario = localStorage.getItem("usuario");
if (!usuario) {
  alert("Você precisa fazer login primeiro!");
  window.location.href = "index.html";
}

// Mostra o nome do professor logado
document.getElementById("professorNome").textContent = usuario;

// Referências aos elementos
const listaTurmas = document.getElementById("listaTurmas");
const btnCadastrar = document.getElementById("btnCadastrarTurma");

// Função para carregar turmas da API
async function carregarTurmas() {
  const res = await fetch("http://localhost:3000/api/turmas");
  const turmas = await res.json();

  listaTurmas.innerHTML = "";

  turmas.forEach((t) => {
    const card = document.createElement("article");
    card.classList.add("task-card");
    card.innerHTML = `
      <div class="task-info"><strong>Número:</strong> ${t.numero}</div>
      <div class="task-info"><strong>Nome:</strong> ${t.nome}</div>
      <div class="task-info"><strong>Ação:</strong> Visualizar / Excluir</div>
      <div class="task-actions">
        <button class="action-btn visualizar" data-id="${t.id}">Visualizar</button>
        <button class="action-btn delete" data-id="${t.id}">Excluir</button>
      </div>
    `;
    listaTurmas.appendChild(card);
  });
}

// Função para cadastrar nova turma
btnCadastrar.addEventListener("click", async () => {
  const nome = prompt("Digite o nome da turma:");
  if (!nome) return;

  const numero = Math.floor(Math.random() * 1000);

  await fetch("http://localhost:3000/api/turmas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ numero, nome }),
  });

  carregarTurmas();
});

// Função para excluir turma
listaTurmas.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;
    if (confirm("Deseja excluir esta turma?")) {
      await fetch(`http://localhost:3000/api/turmas/${id}`, {
        method: "DELETE",
      });
      carregarTurmas();
    }
  }
});

// Carrega turmas ao entrar na página
carregarTurmas();

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("usuario");
});
