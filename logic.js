/**
 * Pure logic functions for Todo management
 */

export function createTodo(text) {
    return {
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
        text: text.trim(),
        completed: false
    };
}

export function addTodo(todos, text) {
    if (!text || !text.trim()) return todos;
    return [...todos, createTodo(text)];
}

export function toggleTodo(todos, id) {
    return todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
}

export function deleteTodo(todos, id) {
    return todos.filter(todo => todo.id !== id);
}

export function getRemainingCount(todos) {
    return todos.filter(todo => !todo.completed).length;
}