import { describe, it, expect } from 'vitest';
import { addTodo, toggleTodo, deleteTodo, getRemainingCount } from './logic.js';

describe('Todo Logic', () => {
  it('should add a new todo item', () => {
    const initialTodos = [];
    const result = addTodo(initialTodos, 'Buy milk');
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Buy milk');
    expect(result[0].completed).toBe(false);
    expect(result[0]).toHaveProperty('id');
  });

  it('should not add an empty todo', () => {
    const initialTodos = [];
    const result = addTodo(initialTodos, '   ');
    expect(result).toHaveLength(0);
  });

  it('should toggle todo completion status', () => {
    const todo = { id: '1', text: 'Test', completed: false };
    const todos = [todo];
    const toggled = toggleTodo(todos, '1');
    expect(toggled[0].completed).toBe(true);
    const untoggled = toggleTodo(toggled, '1');
    expect(untoggled[0].completed).toBe(false);
  });

  it('should delete a todo item', () => {
    const todos = [
      { id: '1', text: 'One', completed: false },
      { id: '2', text: 'Two', completed: false }
    ];
    const result = deleteTodo(todos, '1');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('2');
  });

  it('should calculate remaining incomplete items correctly', () => {
    const todos = [
      { id: '1', text: 'One', completed: false },
      { id: '2', text: 'Two', completed: true },
      { id: '3', text: 'Three', completed: false }
    ];
    expect(getRemainingCount(todos)).toBe(2);
  });
});