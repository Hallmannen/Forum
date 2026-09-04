

import {form, query} from "$app/server"
import * as v from "valibot"

let todos: string[] = [];

export const getTodos = query(async () => todos);

export const addTodo = form(
v.object({
    text: v.pipe(v.string(), v.nonEmpty()),
}),
    async ({text}) => {
        todos.push(text);
    },
);
export const deleteTodo = form(
v.object({
    text: v.pipe(v.string(), v.nonEmpty()),
}),
    async ({text}) => {
        todos.splice(todos.indexOf(text), 1);

    },
);

