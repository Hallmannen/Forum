import {form, query} from "$app/server"
import * as v from "valibot"

import { getRequestEvent } from '$app/server';
import { redirect } from "@sveltejs/kit";


export const loggin = form(
v.object({
    name: v.pipe(v.string(), v.nonEmpty()),
    password: v.pipe(v.string(), v.nonEmpty()),

}),
    async ({password, name}) => {
        const { cookies } = getRequestEvent();
        cookies.set('inloggning', 'a-value', { path: '/', httpOnly: true });
        redirect(303, "/")
    },
);
