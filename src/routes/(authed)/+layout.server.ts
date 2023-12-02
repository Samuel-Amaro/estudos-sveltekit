import { redirect } from '@sveltejs/kit';

//FUNCTION DE CARREGAMENTO DE DADOS PARA +layout.server.ts
export function load({ cookies, url }) {
  //SE NÃO ESTIVER LOGADO E REDIRECIONADO 
	if (!cookies.get('logged_in')) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
}