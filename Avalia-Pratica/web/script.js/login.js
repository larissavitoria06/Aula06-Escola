document.getElementById("loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("username").value;
  const senha = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const resposta = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      errorMessage.textContent = dados.message || "Erro ao fazer login";
      errorMessage.style.display = "block";
      return;
    }

    // Armazena o usuário logado
    localStorage.setItem("usuario", dados.usuario);

    // Redireciona para página de professores
    window.location.href = "./Professores.html";
  } catch (erro) {
    errorMessage.textContent = "Erro de conexão com o servidor";
    errorMessage.style.display = "block";
  }
});
