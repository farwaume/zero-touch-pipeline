/**
 * Pure logic functions for Todo management
 */

export const createTodo = (text) => ({
  id: Math.random().toString(36).substr(2, 9) + Date.now(),
  text,
  completed: false
});

export const addTodo = (todos, text) => {
  if (!text || !text.trim()) return todos;
  return [...todos, createTodo(text.trim())];
};

export const toggleTodo = (todos, id) => {
  return todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const deleteTodo = (todos, id) => {
  return todos.filter(todo => todo.id !== id);
};

export const getRemainingCount = (todos) => {
  return todos.filter(todo => !todo.completed).length;
};