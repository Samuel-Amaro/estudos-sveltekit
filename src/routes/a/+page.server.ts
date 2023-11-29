import { redirect } from '@sveltejs/kit';

/**
 * * REDIRECIONAMENTOS
 * 
 * Também podemos usar o throw mecanismo para redirecionar de uma página para outra.
 * 
 * Navegar para /aagora nos levará diretamente para /b.
 * 
 * Você pode usar throw redirect(...)  dentro de load functions, form actions, API routes é o handle hook.
 * 
 * Os códigos de status mais comuns que você usará:
 * 
 * 303 — para ações de formulário, após um envio bem-sucedido
 * 307 — para redirecionamentos temporários
 * 308 — para redirecionamentos permanentes
 */

export function load() {
	throw redirect(307, '/b');
}