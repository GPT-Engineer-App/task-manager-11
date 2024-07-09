import { useState } from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default Index;