import { error } from '@sveltejs/kit';

/**
 * * ERRORS AND REDIRECTS BASICS
 * 
 * Existem dois tipos de erros no SvelteKit – erros esperados e erros inesperados .
 * 
 * Um erro esperado é aquele que foi criado com o error auxiliar from @sveltejs/kit
*/

export function load() {
  //aqui lançamos um erro esperado
  //Quando você gera um erro esperado, está dizendo ao SvelteKit 'não se preocupe, eu sei o que estou fazendo aqui'.
  // a mensagem de erro esperada é mostrada ao usuário
	throw error(420, 'Enhance your calm');
}