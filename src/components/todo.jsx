import React, { useState } from "react";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  editTodo,
  isEditing,
  saveEditedTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.text);
  const [editedCategory, setEditedCategory] = useState(todo.category);

  // Função para salvar as edições na tarefa.
  const handleSave = () => {
    saveEditedTodo(todo.id, editedText, editedCategory);
  };

  // Define a estrutura de uma tarefa.
  return (
    <div
      className={`todo ${isEditing ? "editing" : ""}`}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <input
              type="text"
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
            />
          </>
        ) : (
          // Se não estiver em edição, exibe o texto e a categoria da tarefa.
          <>
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          // Se estiver em edição, mostra o botão "Salvar" para confirmar as edições.
          <button className="save" onClick={handleSave}>
            Salvar
          </button>
        ) : (
          // Se não estiver em edição, mostra os botões "Completar", "Editar" e "Excluir".
          <>
            <button className="complete" onClick={() => completeTodo(todo.id)}>
              Completar
            </button>
            <button className="edit" onClick={() => editTodo(todo.id)}>
              Editar
            </button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
