import type { PageServerLoad } from './$types';

//declaramos uma function de carregamento, de dados para a page /
//Uma load função em um +page.ts arquivo é executada no servidor e no navegador (a menos que combinada com export const ssr = false, nesse caso só será executada no navegador ). Se sua load função deve sempre ser executada no servidor (porque usa variáveis ​​de ambiente privadas, por exemplo, ou acessa um banco de dados), então ela entraria em a +page.server.ts.
//Observe que o tipo mudou de PageLoad para PageServerLoad, porque loadas funções do servidor podem acessar argumentos adicionais. Para entender quando usar +page.ts e quando usar +page.server.ts, veja Universal vs servidor.
//dependendo se usa +page.server.ts ou somente +page.ts como irmã de uma page para carregamento de dados o tipo do load pode variar entre PageServerLoad ou PageLoad

/**
 * * HEADERS AND COOKIES
 * 
 * Dentro de uma função de carregamento (bem como em ações de formulário, ganchos e rotas de API, sobre as quais aprenderemos mais tarde), você tem acesso a uma função setHeaders, que — sem surpresa — pode ser usada para definir cabeçalhos na resposta.
 * 
 * Mais comumente, você o usaria para personalizar o comportamento do cache com o cabeçalho de resposta Cache-Control, mas neste tutorial faremos algo menos aconselhável e mais dramático:
*/

//Tanto as funções de servidor quanto as universais load têm acesso a uma setHeaders função que, quando executada no servidor, pode definir cabeçalhos para a resposta. (Quando executado no navegador, setHeadersnão tem efeito.)

/*export const load: PageServerLoad = ({setHeaders}) => {
	setHeaders({
    'Content-Type': "text/plain"
  });
}*/

/**
 * * READING AND WRITING COOKIES
 * 
 * A setHeaders função não pode ser usada com o Set-Cookie cabeçalho. Em vez disso, você deve usar a cookiesAPI.
 * 
 * Nas suas load funções, você pode ler um cookie com cookies.get(name, options):
 * 
 * Para definir um cookie, use cookies.set(name, value, options). É altamente recomendável que você configure explicitamente pathao definir um cookie, já que o comportamento padrão dos navegadores — um tanto inútil — é definir o cookie no pai do caminho atual.
 * 
 * A chamada cookies.set(name, ...)faz com que um Set-Cookiecabeçalho seja escrito, mas também atualiza o mapa interno de cookies, o que significa que quaisquer chamadas subsequentes cookies.get(name)durante a mesma solicitação retornarão o valor atualizado. Nos bastidores, a cookiesAPI usa o cookiepacote popular - as opções passadas cookies.gete cookies.setcorrespondem às opções parsee serializeda cookie documentação

*/

//function de carregamento de dados, trabalhando com cookie
//vamos usar a cookiesAPI dentro da load function 
export const load: PageServerLoad = ({cookies}) => {
  //lendo um cookie
	const visited = cookies.get('visited');

  //definindo um cookie
  cookies.set('visited', 'true', {path: "/"});
  
  return {
    visited
  };
}