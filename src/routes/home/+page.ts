/**
 * * USANDO AMBAS LOAD(CARREGAMENTO) FUNCTIONS
 * 
 * Ocasionalmente, pode ser necessário usar uma função de carregamento do servidor e uma função de carregamento universal juntas. Por exemplo, talvez seja necessário retornar dados do servidor, mas também retornar um valor que não pode ser serializado como dados do servidor.
 * 
 * Neste exemplo, queremos retornar um componente diferente do carregamento(load) dependendo se os dados que obtivemos de src/routes/+page.server.js são legais ou não.
 * 
 * Podemos acessar os dados do servidor src/routes/+page.js por meio da data propriedade:
 * 
 * Observe que os dados não são mesclados — devemos retornar explicitamente message da load função universal.
*/

//function universal de carregamento de dados
//aqui vamos acessar os dados do server por meio da data proprieade
//preimeifo foi carregado a load do +page.server.ts depois a gente obteu os dados por meio de data, retornamos um componente quer não pode ser serializado, e retornaods dados que vieram do server por que inteceptemos aqui e vamos retornar novamente para a page ter acesso
export async function load({ data }) {
	const module = data.cool
		? await import('./CoolComponent.svelte')
		: await import('./BoringComponent.svelte');

	return {
		component: module.default,
		message: data.message
	};
}