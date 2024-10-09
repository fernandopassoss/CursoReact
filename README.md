# Lista de Tarefas - Aplicação React

Este projeto é uma aplicação de lista de tarefas simples feita em React, onde os usuários podem adicionar, remover, concluir tarefas e realizar buscas por tarefas com base no texto. A aplicação utiliza **useState** para o gerenciamento de estado e inclui componentes para as tarefas, formulário de criação de tarefa e barra de busca.

## Funcionalidades

- Adicionar novas tarefas com título e categoria.
- Marcar tarefas como concluídas (com texto riscado).
- Remover tarefas.
- Filtrar tarefas em tempo real utilizando a barra de busca.
- Persistência local das tarefas na interface.

## Estrutura do Projeto

A aplicação está dividida em 4 componentes principais:

### 1. **App.js**
Componente principal que contém a lógica da aplicação. Ele gerencia as tarefas e permite as operações de adicionar, remover, completar e buscar tarefas.

#### Hooks utilizados:
- `useState`: Gerenciamento do estado para lista de tarefas e para a barra de busca.

#### Funções principais:
- `addTodo(text, category)`: Adiciona uma nova tarefa com título e categoria.
- `removeTodo(id)`: Remove uma tarefa da lista com base no ID.
- `completeTodo(id)`: Marca uma tarefa como concluída/incompleta com base no ID.
- Filtragem de tarefas com base na busca.

### 2. **Search.js**
Componente responsável pela barra de pesquisa, que permite filtrar as tarefas exibidas com base no texto inserido.

#### Props:
- `search`: Texto da busca atual.
- `setSearch`: Função para atualizar o texto da busca.

### 3. **Todo.js**
Componente responsável por exibir uma tarefa individual, com botões para completar ou remover a tarefa.

#### Props:
- `todo`: Objeto representando uma tarefa.
- `removeTodo(id)`: Função para remover a tarefa com base no ID.
- `completeTodo(id)`: Função para marcar como concluída/incompleta a tarefa com base no ID.

### 4. **TodoForm.js**
Componente responsável pelo formulário para adicionar uma nova tarefa. Ele permite inserir o título da tarefa e selecionar uma categoria (Trabalho, Pessoal, Estudos).

#### Hooks utilizados:
- `useState`: Para gerenciar o título e a categoria da nova tarefa.

#### Funções:
- `handleSubmit(e)`: Função que lida com o envio do formulário, adicionando uma nova tarefa na lista.

## Dependências

A aplicação usa ícones da biblioteca `react-icons` para os botões de adicionar, concluir e remover tarefas.

Instalação das dependências:

```bash
npm install react-icons

<img src="https://github.com/fernandopassoss/CursoReact/blob/99e13c3e4a06d7d1e5b03917b92f9a000f58f17a/ToDo/todoimg1.png">
