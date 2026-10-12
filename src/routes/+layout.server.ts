import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ cookies, url }) => {
const value = cookies.get('inloggning');
const user_id = cookies.get("user_id");

// TODO: om user_id finns, hämta användaren från databasen
// med db.orm.public.User.where({ id: user_id }).first()

// TODO: finns ingen användare, och vi inte är på /login eller /register,
// redirecta till /login

// TODO: returnera användarnamnet så sidorna kan visa det
// return { username: user?.username };
if (value == null && url.pathname != "/Inloggning"){
    redirect(303, "/Inloggning")
}
return { myData: value ?? null };
};
