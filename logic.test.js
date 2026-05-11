import { describe, it, expect } from 'vitest';
import { addTodo, toggleTodo, deleteTodo, getRemainingCount } from './logic.js';

describe('Todo Logic', () => {
  it('should add a new todo', () => {
    const initial = [];
    const result = addTodo(initial, 'Test Task');
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Test Task');
    expect(result[0].completed).toBe(false);
  });

  it('should not add empty todos', () => {
    const initial = [];
    const result = addTodo(initial, '  ');
    expect(result).toHaveLength(0);
  });

  it('should toggle todo completion', () => {
    const todo = { id: 1, text: 'Task', completed: false };
    const result = toggleTodo([todo], 1);
    expect(result[0].completed).toBe(true);
    const result2 = toggleTodo(result, 1);
    expect(result2[0].completed).toBe(false);
  });

  it('should delete a todo', () => {
    const todos = [{ id: 1, text: 'A' }, { id: 2, text: 'B' }];
    const result = deleteTodo(todos, 1);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it('should count remaining items correctly', () => {
    const todos = [
      { id: 1, completed: false },
      { id: 2, completed: true },
      { id: 3, completed: false }
    ];
    expect(getRemainingCount(todos)).toBe(2);
  });
});