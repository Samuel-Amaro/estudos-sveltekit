/**
 * * ERRORS AND REDIRECTS BASICS
 * 
 * Existem dois tipos de erros no SvelteKit – erros esperados e erros inesperados .
 * 
 * Um erro esperado é aquele que foi criado com o error auxiliar from @sveltejs/kit Qualquer outro erro — como o que está em baixo no load  é tratado como inesperado:
*/

export function load() {
  //aqui lançamos um erro inesperado
  //Um erro inesperado, por outro lado, é considerado um bug no seu aplicativo. Quando um erro inesperado é gerado, sua mensagem e rastreamento de pilha serão registrados no console.
  //a mensagem de erro inesperada é redigida e substituída por uma mensagem genérica de 'Erro Interno' e um código de status 500. Isso ocorre porque as mensagens de erro podem conter dados confidenciais.
	throw new Error('Kaboom!');
}