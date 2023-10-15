import {useState} from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        // Verifica se o valor ou a categoria estão em branco antes de criar a tarefa.
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");

  }

  return (
        // Bloco que define o formulário de criação de tarefas.
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título" 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select value= {category} onChange={(e) => setCategory(e.target.value)}>

          <option value="">Selecione uma categoria</option>
          <option value="Pomodoro 20 min">Pomodoro </option>
          <option value="Descanso 5 min">Descanso </option>

          
        </select>
        <button type="submit">Criar Tarefa </button>
      </form>
    </div>
  );
};

export default TodoForm;
