function adicionarItem() {
  const nome = document.getElementById('nome').value;
  const status = document.getElementById('status').value;
  const local = document.getElementById('localizacao').value;
  const data = document.getElementById('data').value;

  if (!nome || !local || !data) {
    alert('Preencha todos os campos!');
    return;
  }

  const tabela = document.getElementById('tabela');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${nome}</td>
    <td>${status}</td>
    <td>${local}</td>
    <td>${data}</td>
  `;

  tabela.appendChild(row);

  // Limpar campos
  document.getElementById('nome').value = "";
  document.getElementById('localizacao').value = "";
  document.getElementById('status').value = "Em uso";
  document.getElementById('data').value = "";
}