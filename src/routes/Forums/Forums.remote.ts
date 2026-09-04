

import {form, query} from "$app/server"
import * as v from "valibot"

let Forums: {
    id: number;  
    name: string;  
}[] = [];
export const getForums = query(async () => Forums);

export const addForum = form(
v.object({
    name: v.pipe(v.string(), v.nonEmpty()),
    id: v.pipe(v.number()),

}),
    async ({id, name}) => {
        Forums.push({id, name});
    },
);
