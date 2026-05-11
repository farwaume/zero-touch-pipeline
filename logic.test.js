import { describe, it, expect } from 'vitest';
import { addTodo, toggleTodo, deleteTodo, getRemainingCount } from './logic.js';

describe('Todo Logic Unit Tests', () => {
    it('adds a new todo to the list', () => {
        const initial = [];
        const result = addTodo(initial, 'Buy groceries');
        expect(result).toHaveLength(1);
        expect(result[0].text).toBe('Buy groceries');
        expect(result[0].completed).toBe(false);
    });

    it('ignores empty or whitespace-only input', () => {
        const initial = [];
        expect(addTodo(initial, '')).toHaveLength(0);
        expect(addTodo(initial, '   ')).toHaveLength(0);
    });

    it('toggles completion status of a todo', () => {
        const id = 'test-id';
        const initial = [{ id, text: 'Task', completed: false }];
        
        const step1 = toggleTodo(initial, id);
        expect(step1[0].completed).toBe(true);
        
        const step2 = toggleTodo(step1, id);
        expect(step2[0].completed).toBe(false);
    });

    it('deletes a todo by id', () => {
        const id = 'to-delete';
        const initial = [
            { id: '1', text: 'Keep', completed: false },
            { id, text: 'Delete', completed: false }
        ];
        const result = deleteTodo(initial, id);
        expect(result).toHaveLength(1);
        expect(result.find(t => t.id === id)).toBeUndefined();
    });

    it('calculates the count of incomplete items', () => {
        const todos = [
            { id: '1', text: 'A', completed: false },
            { id: '2', text: 'B', completed: true },
            { id: '3', text: 'C', completed: false }
        ];
        expect(getRemainingCount(todos)).toBe(2);
    });
});