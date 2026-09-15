import { form, query } from "$app/server";
import * as v from "valibot";

let current_id = 0;

let todos: {
    id: number;
    text: string;
    completed: boolean;
}[] = [];

todos.push({
    id: current_id++,
    text: "super banana",
    completed: false
});

export const getTodos = query(async() => {
    return todos;
});

export const createTodo = form(
    v.object({
        text: v.string()
    }),
    ({ text }) => {
        todos.push({
            id: current_id++,
            text: text,
            completed: false
        });
    }
);

export const removeTodo = form(
    v.object({
        id: v.number()
    }),
    ({ id }) => {
        todos = todos.filter((todo) => todo.id != id);
    }
);

export const completeTodo = form(
    v.object({
        id: v.number()
    }),
    ({ id }) => {
        let todo = todos.find((todo) => todo.id == id);

        if (todo) {
            todo.completed = !todo.completed;
        }
    }
);
