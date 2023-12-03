import component from "./blue.svelte";

/**
 * * UNIVERSAL LOAD FUNCTIONS(FUNCÇÕES UNIVERSAIS DE CARREGAMENTO)
 * 
 * Na seção anterior sobre carregamento, carregamos dados do servidor usando arquivos +page.server.jse +layout.server.js. Isso é muito conveniente se você precisar fazer coisas como obter dados diretamente de um banco de dados ou ler cookies.
 * 
 * Às vezes não faz sentido carregar dados do servidor ao fazer uma navegação no lado do cliente. Por exemplo:
 * 
 * Você está carregando dados de uma API externa
 * 
 * Você deseja usar dados na memória, se estiverem disponíveis
 * 
 * Você deseja atrasar a navegação até que uma imagem seja pré-carregada, para evitar pop-in
 * 
 * Você precisa retornar algo load que não pode ser serializado (o SvelteKit usa devalue para transformar os dados do servidor em JSON), como um componente ou uma loja
 * 
 * Neste exercício, estamos lidando com o último caso. As funções de carregamento(load) do servidor em src/routes/red/+page.server.js, src/routes/green/+page.server.js e src/routes/blue/+page.server.js retornam um construtor de componente, que pode não ser serializado como dados. Se você navegar para /red, /green ou /blue, verá um erro 'Dados retornados do carregamento... não são serializáveis' no terminal.
 * 
 * Para transformar as load funções do servidor em load funções universais, renomeie cada +page.server.js arquivo para +page.js. Agora, as funções serão executadas no servidor durante a renderização no lado do servidor, mas também serão executadas no navegador quando o aplicativo for hidratado ou o usuário realizar uma navegação no lado do cliente.
 * @returns 
 */

//function de carregamento de dados universal
//aqui precisamos usar a function universal de carregamento de dados para poder retornar algo que não pode ser sereializado via json, como um construtor de um componente svelte
export function load() {
	return {
		color: 'blue',
		component
	};
}
