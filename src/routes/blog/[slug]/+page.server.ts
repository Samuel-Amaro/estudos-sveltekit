/**
 * * LOADING DATA(cARREGAMENTO DE DADOS)
 * 
 * Basicamente, o trabalho do SvelteKit se resume a três coisas:
 * 
  * Roteamento — descubra qual rota corresponde a uma solicitação recebida
  * Carregando — obtenha os dados necessários para a rota
  * Renderização - gere algum HTML (no servidor) ou atualize o DOM (no navegador)
  * 
 *  Vimos como o roteamento e a renderização funcionam. Vamos falar sobre a parte intermediária – carregamento.
 * 
 * Cada página do seu aplicativo pode declarar uma load função em um +page.server.ts arquivo junto com o +page.svelte arquivo. Como o nome do arquivo sugere, este módulo só é executado no servidor, inclusive para navegações do lado do cliente.
 * 
 * Para fins do tutorial, estamos importando dados do src/routes/blog/data.js. Em um aplicativo real, é mais provável que você carregue os dados de um banco de dados ou CMS, mas por enquanto faremos assim.
*/

import { error } from '@sveltejs/kit';
import { posts } from '../data';
import type {PageServerLoad} from "./$types";

//antes que um +page.svelte componente e seus +layout.svelte componente possa ser renderizado, geralmente precisamos obter alguns dados, isso e feito definindo load funções
//declaramos uma function de carregamento, de dados para a page /blog/[slug]
//Uma load função em um +page.ts arquivo é executada no servidor e no navegador (a menos que combinada com export const ssr = false, nesse caso só será executada no navegador ). Se sua load função deve sempre ser executada no servidor (porque usa variáveis ​​de ambiente privadas, por exemplo, ou acessa um banco de dados), então ela entraria em a +page.server.ts.
//Observe que o tipo mudou de PageLoad para PageServerLoad, porque loadas funções do servidor podem acessar argumentos adicionais. Para entender quando usar +page.ts e quando usar +page.server.ts, veja Universal vs servidor.
//dependendo se usa +page.server.ts ou somente +page.ts como irmã de uma page para carregamento de dados o tipo do load pode variar entre PageServerLoad ou PageLoad
export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((post) => post.slug === params.slug);

  //caso não possua dados para serem carregados retorna um 404
  if(!post) throw error(404);

	return {
		post
	};
}