# Aplicação de Lista de Tarefas

Este é um aplicativo de lista de tarefas simples desenvolvido em React. Permite que você crie, edite, complete e exclua tarefas. Além disso, você pode pesquisar por tarefas específicas.

## Componente App

O componente `App` é o componente principal da aplicação. Ele gerencia o estado da lista de tarefas, incluindo adição, remoção, edição e conclusão de tarefas. Ele também lida com a pesquisa de tarefas.

## Componentes Reutilizáveis

### `Search`

O componente `Search` fornece uma barra de pesquisa que permite filtrar as tarefas com base no texto inserido.

### `Todo`

O componente `Todo` representa uma única tarefa. Ele pode exibir a tarefa, permitir sua edição, conclusão e remoção.

### `TodoForm`

O componente `TodoForm` oferece um formulário para criar novas tarefas. Permite a inserção do título da tarefa e a seleção de uma categoria.

## Arquivo `main`

O arquivo `main.js` é responsável por renderizar o componente `App` na página. Ele configura o ambiente React e define o ponto de entrada da aplicação.

## Como Executar a Aplicação

1. Certifique-se de que você tenha o Node.js e o npm instalados em sua máquina.

2. Clone este repositório.

3. Navegue até a pasta raiz do projeto.

4. Execute o seguinte comando para instalar as dependências:

   ```sh
   npm install
 