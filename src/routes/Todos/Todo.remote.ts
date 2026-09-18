import { db } from "#lib";
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
    await db.orm.public.Todo.all();
});

export const createTodo = form(
    v.object({
        text: v.string()
    }),
    ({ text }) => {
        await db.orm.public.Todo.create({ text, completed: false });
        });
    }
);

export const removeTodo = form(
    v.object({
        id: v.number()
    }),
    async ({ id }) => {
        await db.orm.public.Todo.where({id}).delete
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

