

import {form, query} from "$app/server"
import * as v from "valibot"
import { db } from "../../../prisma/db";


let messages: Record<string, string[]> = {};

export const getMessages = query(v.string(), (id) => {
return messages[id] ?? [];

});

export const createMessage = form(
    v.object({
        message: v.string(),
        id: v.string(),
    }),
    async ({ id, message }) => {
        if (!messages[id]){
            messages[id] = [];
        }
        await db.orm.public.Message.create({ text: message, forumid: id });

    },
);