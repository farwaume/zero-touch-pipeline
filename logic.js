export const createTodo = (text) => ({
  id: Date.now() + Math.random(),
  text,
  completed: false
});

export const addTodo = (todos, text) => {
  const trimmed = text.trim();
  if (!trimmed) return todos;
  return [...todos, createTodo(trimmed)];
};

export const toggleTodo = (todos, id) => {
  return todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
};

export const deleteTodo = (todos, id) => {
  return todos.filter(t => t.id !== id);
};

export const getRemainingCount = (todos) => {
  return todos.filter(t => !t.completed).length;
};