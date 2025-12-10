function adicionarItem() {
  // Função chamada quando o usuário clica no botão "Cadastrar"

  const nome = document.getElementById('nome').value;
  // Pega o valor digitado no campo "nome"

  const status = document.getElementById('status').value;
  // Pega o valor selecionado no campo "status"

  const local = document.getElementById('localizacao').value;
  // Pega o valor digitado no campo "localização"

  const data = document.getElementById('data').value;
  // Pega a data selecionada no campo "data"

  if (!nome || !local || !data) {
    // Verifica se os campos obrigatórios foram preenchidos

    alert('Preencha todos os campos!');
    // Exibe mensagem de aviso se estiver faltando algo

    return;
    // Para a execução da função
  }

  const tabela = document.getElementById('tabela');
  // Seleciona o corpo da tabela onde os itens serão adicionados

  const row = document.createElement('tr');
  // Cria uma nova linha (tag <tr>) para a tabela

  row.innerHTML = `
    <td>${nome}</td>
    <td>${status}</td>
    <td>${local}</td>
    <td>${data}</td>
  `;
  // Preenche a linha com 4 colunas (<td>) usando os valores dos campos

  tabela.appendChild(row);
  // Adiciona a linha completa dentro da tabela

  // ----------------------------
  // Limpeza dos campos do formulário
  // ----------------------------

  document.getElementById('nome').value = "";
  // Limpa o campo "nome"

  document.getElementById('localizacao').value = "";
  // Limpa o campo "localização"

  document.getElementById('status').value = "Em uso";
  // Reseta o status para o padrão "Em uso"

  document.getElementById('data').value = "";
  // Limpa o campo de data
}
