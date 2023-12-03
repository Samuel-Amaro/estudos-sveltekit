/**
 * * FALBACK ERROS
 *
 * Se as coisas derem realmente errado - ocorre um erro ao carregar os dados do layout raiz ou ao renderizar a página de erro - o SvelteKit retornará para uma página de erro estática.
 *
 * Você pode personalizar a página de erro de fallback. aqui criamos uma src/error.html
 */

/**
 * !REMOVER COMENTARIO SOMENTE QUANDO QUISER VER COMO FUNCIONA
export function load() {
  //aqui lançamos um erro inesperado
	throw new Error('Kaboom!');
}*/

//function de carregamento de dados do server para o layout root
export async function load() {
	return {a: 1};
}
