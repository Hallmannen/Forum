

import {form, query} from "$app/server"
import * as v from "valibot"
import { db } from "../../prisma/db";


export const addForum = form(
v.object({
    name: v.pipe(v.string(), v.nonEmpty()),
    

}),
    async ({name}) => {
        await db.orm.public.Forum.create({ name });
    },
);
export const getForums = query(async() => 
    await db.orm.public.Forum.all()
        
);