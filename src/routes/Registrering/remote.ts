import {form, query} from "$app/server"
import * as v from "valibot"
import { db } from "../../prisma/db";
import { getRequestEvent } from '$app/server';
import { redirect } from "@sveltejs/kit";
import { hashPassword } from "#lib/server/password.js";



export const createAccount = form(
    v.object({
        username: v.string(),
        _password: v.string()
    }),
    async ({ username, _password }) => {
       const user = await db.orm.public.User.create({
        username,
        passwordHash: hashPassword(_password),
});
})

  