document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Aqui você pode adicionar sua lógica de autenticação
  if (username === "admin" && password === "senha123") {
    alert("Login bem-sucedido!");
    // Redirecionar para outra página ou carregar a interface principal
  } else {
    document.getElementById("error").textContent =
      "Usuário ou senha incorretos.";
  }
});
