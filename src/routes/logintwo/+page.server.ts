import { env } from '$env/dynamic/private'; //le variavel de ambiente secreta no momento em que o aplicativo for executado
import { PASSPHRASE } from '$env/static/private'; //variavel de ambiente secreta e lida no momento em que o aplicativo for criado
import { redirect, fail } from '@sveltejs/kit';

export function load({ cookies }) {
	if (cookies.get('allowed')) {
		throw redirect(307, '/welcome');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

    //usando a variaivel de ambiente PASSPHRASE
    //Se você precisar ler os valores das variáveis ​​de ambiente quando o aplicativo for executado, em vez de quando o aplicativo for criado, você poderá usar $env/dynamic/privateem vez de $env/static/private:
    //FORMA DE USAR COMO VALUE STATIC PASSPHRASE SOMENTE O NOME DA VARIAVEL DE AMBIENTE
    //FORMA DE USAR COMO VALUE DINAMIC env.PASSPHRASE USANDO O env
		if (data.get('passphrase') === env.PASSPHRASE/*OR PASSPHRASE*/) {
			cookies.set('allowed', 'true', {
				path: '/'
			});

			throw redirect(303, '/welcome');
		}

		return fail(403, {
			incorrect: true
		});
	}
};
