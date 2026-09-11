import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ cookies, url }) => {
const value = cookies.get('inloggning');

if (value == null && url.pathname != "/Inloggning"){
    redirect(303, "/Inloggning")
}
return { myData: value ?? null };
};
