import { form, query } from "$app/server"
import * as v from "valibot"
import { db } from "../../prisma/db";
import { getRequestEvent } from '$app/server';
import { invalid, redirect } from "@sveltejs/kit";
import { hashPassword } from "#lib/server/password.js";
import { login } from "../Inloggning/remote";



export const createAccount = form(
    v.object({
        username: v.pipe(v.string(), v.nonEmpty()),
        _password: v.pipe(v.string(),v.nonEmpty() , v.minLength(8, "minst 8 tecken")),

    }),
    async ({ username, _password }, issue) => {
        const taken = await db.orm.public.User.where({ username }).first();

        if (taken) {
            invalid(issue.username("användarnamnet är upptaget"));
        }
        else {
            const user = await db.orm.public.User.create({
                username,
                passwordHash: hashPassword(_password),
            })

            const { cookies } = getRequestEvent();
            cookies.set("logged_in", "yep", { path: "/", httpOnly: true });

            redirect(303, "/");
        }

    });
