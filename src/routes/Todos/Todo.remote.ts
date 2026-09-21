import { db } from "#lib";
import { form, query } from "$app/server";
import * as v from "valibot";


export const getTodos = query(async() => 
    await db.orm.public.Todo.all()
        
);

export const createTodo = form(
    v.object({
        text: v.string()
    }),
    async ({ text }) => {
        await db.orm.public.Todo.create({ text, completed: false });
        });

export const removeTodo = form(
    v.object({
        id: v.number()
    }),
    async ({ id }) => {
        await db.orm.public.Todo.where({id}).delete()
    }
);
    
export const completeTodo = form(
    v.object({
        id: v.number()
    }),
    async ({ id }) => {
      await db.orm.public.Todo.where({id}).update({completed: true})
    }
);

