import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "(Pomodoro)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Cafézinho",
      category: "(Descanso)",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [editingTodo, setEditingTodo] = useState(null); // Estado para rastrear a tarefa em edição

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const saveEditedTodo = (id, newText, newCategory) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            text: newText,
            category: newCategory,
          }
        : todo
    );
    setTodos(newTodos);
    setEditingTodo(null); // Limpar a tarefa em edição
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              editTodo={editTodo} // Passar a função de edição para o componente Todo
              isEditing={editingTodo && editingTodo.id === todo.id} // Informar se a tarefa está em edição
              saveEditedTodo={saveEditedTodo} // Passar a função para salvar tarefas editadas
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
