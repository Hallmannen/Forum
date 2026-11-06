import { form, query } from "$app/server";
import * as v from "valibot";
import { db } from "#lib";



export const addArticle = form(
    v.object({
        name: v.string(),
        price: v.number()
    }),
    async ({ name, price }) => {
        await db.orm.public.artikel.create({name, price});
        });

export const getArticle = query(async() => 
    await db.orm.public.artikel.all()
        
);