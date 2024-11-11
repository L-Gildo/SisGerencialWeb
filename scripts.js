// scripts.js

// Dados de subitens para cada menu
const menuItems = {
  Cadastros: [
    "Usuários",
    "Colaboradores",
    "Clientes",
    "Convênio",
    "Suplementares",
    "ROTAS - Municípios",
    "FROTA",
    "Equipamentos",
  ],
  Fornecedores: ["Novo Fornecedor", "Listar Fornecedores", "Editar Fornecedor"],
  Clientes: ["Novo Cliente", "Listar Clientes", "Editar Cliente"],
  Equipamento: [
    "Novo Equipamento",
    "Listar Equipamentos",
    "Editar Equipamento",
  ],
  Produtos: ["Novo Produto", "Listar Produtos", "Editar Produto"],
  // Continue adicionando subitens conforme necessário
};

// Função para filtrar itens do menu com base no campo de pesquisa
function filterMenu() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let menuList = document.getElementById("menuList");
  let items = menuList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].textContent || items[i].innerText;
    items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
  }
}

// Função para exibir submenu com itens do menu selecionado
function showSubMenu(menuName) {
  let subMenu = document.getElementById("subMenu");
  let subItems = menuItems[menuName] || [];

  if (subItems.length > 0) {
    let subMenuContent = `
          <div class="submenu-title">${menuName}</div>
          <ul>${subItems.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    subMenu.innerHTML = subMenuContent;
    subMenu.style.display = "block";

    // Fechar o submenu ao clicar fora dele
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest("#subMenu")) {
        subMenu.style.display = "none";
      }
    });
  }
}
