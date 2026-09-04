

import {form, query} from "$app/server"
import * as v from "valibot"


let messages: Record<string, string[]> = {};

export const getMessages = query(v.string(), (id) => {
return messages[id] ?? [];

});

export const createMessage = form(
    v.object({
        message: v.string(),
        id: v.string(),
    }),
    ({ id, message }) => {
        if (!messages[id]){
            messages[id] = [];
        }
        messages[id].push(message)

    },
);