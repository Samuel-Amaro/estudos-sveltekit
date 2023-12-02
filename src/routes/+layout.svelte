<script lang="ts">
	import { navigating, page, updated } from '$app/stores';
		import type { Navigation } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	/*
	 * * LAYOUTS
	 * Rotas diferentes do seu aplicativo geralmente compartilham uma interface de usuário comum. Em vez de repeti-lo em cada +page.svelte componente, podemos usar um +layout.svelte componente que se aplica a todas as rotas no mesmo diretório.
	 * Um +layout.svelte arquivo se aplica a cada rota filha, incluindo a irmã +page.svelte(se existir). Você pode aninhar layouts em profundidade arbitrária.
	 *
	 * * STORES(LOJAS OR ARMAZENAMENTOS) - PAGE(PÁGINA)
	 *
	 * os armazenamentos(stores) Svelte são um local para colocar dados que não pertencem a um componente individual.
	 *
	 * O SvelteKit disponibiliza três armazenamentos somente leitura por meio do $app/stores módulo - page, navigating e updated. O que você usará com mais frequência é o page, que fornece informações sobre a página atual:
	 *
	 *  url — o URL da página atual
	 * params — os parâmetros da página atual
	 * route — um objeto com uma id propriedade que representa a rota atual
	 * status — o código de status HTTP da página atual
	 * error — o objeto de erro da página atual, se houver
	 * data — os dados da página atual, combinando os valores de retorno de todas as load funções
	 * form— os dados retornados de uma ação de formulário
	 *
	 * Como acontece com qualquer outra loja, você pode referenciar seu valor em um componente prefixando seu nome com o $ símbolo.
	 *
	 * * STORES NAVIGATING
	 *
	 * A navigating loja representa a navegação atual. Quando uma navegação é iniciada - devido a um clique em um link, ou uma navegação para trás/para frente, ou programática goto- o valor de navigations e tornará um objeto com as seguintes propriedades:
	 *
	 * from e to - objetos com propriedades params, route, e url
	 * type — o tipo de navegação, por exemplo link, popstate ou goto
	 *
	 * * OPTIONS DE LINKS - PRÉ CARREGAMENTO
	 * 
	 * Neste exercício, as rotas /slow-a e /slow-b possuem atrasos artificiais em suas load funções, o que significa que leva muito tempo para navegar até elas.
	 * 
	 * Nem sempre você pode fazer com que seus dados sejam carregados mais rapidamente – às vezes isso está fora de seu controle – mas o SvelteKit pode acelerar as navegações antecipando- as . Quando um <a> elemento possui um data-sveltekit-preload-data atributo, o SvelteKit iniciará a navegação assim que o usuário passar o mouse sobre o link (no desktop) ou tocar nele (no celular). Tente adicioná-lo ao primeiro link:
	 * 
	 * A navegação para /slow-aagora será visivelmente mais rápida. Iniciar a navegação ao passar o mouse ou tocar (em vez de esperar que um clickevento seja registrado) pode não parecer fazer muita diferença, mas na prática normalmente economiza 200 ms ou mais. Isso é o suficiente para ser a diferença entre lento e ágil.
	 * 
	 * Você pode colocar o atributo em links individuais ou em qualquer elemento que contenha links. O modelo de projeto padrão inclui o atributo no <body>elemento: <body data-sveltekit-preload-data>%sveltekit.body%</body>
	 * 
	 * Você pode personalizar ainda mais o comportamento especificando um dos seguintes valores para o atributo:
	 * 
	 * "hover"(padrão, volta para "tap"celular)
	 * 
	 * "tap"- comece o pré-carregamento apenas com um toque
	 * 
	 * "off"- desabilitar pré-carregamento
	 * 
	 * Às vezes, o uso data-sveltekit-preload-datapode resultar em falsos positivos - ou seja, carregar dados em antecipação a uma navegação que não acontece então - o que pode ser indesejável. Como alternativa, data-sveltekit-preload-codepermite pré-carregar o JavaScript necessário para uma determinada rota sem carregar seus dados avidamente. Este atributo pode ter os seguintes valores:
	 * 
	 * "eager"— pré-carregar tudo na página após uma navegação
	 * "viewport"— pré-carrega tudo como aparece na janela de visualização
	 * "hover"(padrão) como acima
	 * "tap"- como acima
	 * "off"- como acima
	 * 
	 * Você também pode iniciar o pré-carregamento programaticamente com preloadCode e preloadData importado de $app/navigation:
	 * 
	 * import { preloadCode, preloadData } from '$app/navigation';

		// pré-carregar o código e os dados necessários para navegar para /foo
		preloadData('/foo');

		// pré-carregar o código necessário para navegar para /bar, mas não os dados
		preloadCode('/bar');
	*/

	let previous: Navigation;
	let start: number;
	let end: number | null;
	let seconds = 0;

	$: if ($navigating) {
		start = Date.now();
		end = null;
		previous = $navigating;
	} else {
		end = Date.now();
	}

	/**
	 * * OPTIONS DE LINKS - RELOADING THE PAGE
	 * 
	 * Normalmente, o SvelteKit navegará entre as páginas sem atualizá-las. Neste exercício, se navegarmos entre / e /about, o cronômetro continua funcionando.
	 * 
	 * Em casos raros, você pode querer desabilitar esse comportamento. Você pode fazer isso adicionando o data-sveltekit-reload atributo em um link individual ou em qualquer elemento que contenha links:
	*/

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	const colors = ['ff3e00', '676779', '42b4ff', 'invalid'];
</script>

<nav>
	<!--vamos usar a store $page.URL.pathname para acessar o nome do caminho atual-->
	<!--aqui usando o atributo data-sveltekit-reload você pode querer desabilitar esse comportamento de navegar entre as páginas sem atualizá-las. Você pode fazer isso adicionando o data-sveltekit-reload atributo em um link individual ou em qualquer elemento que contenha links:-->
	<a href="/" target="_self" rel="next" aria-current={$page.url.pathname === '/'} data-sveltekit-reload>home</a>
	<a href="/todos" target="_self" rel="next" aria-current={$page.url.pathname === '/todos'}>todos</a
	>
	<!--aqui usando o atributo data-sveltekit-reload você pode querer desabilitar esse comportamento de navegar entre as páginas sem atualizá-las. Você pode fazer isso adicionando o data-sveltekit-reload atributo em um link individual ou em qualquer elemento que contenha links:-->
	<a href="/about" target="_self" rel="next" aria-current={$page.url.pathname === '/about'} data-sveltekit-reload>about</a
	>
	<a href="/blog" target="_self" rel="next" aria-current={$page.url.pathname === '/blog'}>blog</a>
	<a href="/a/deeply/nested/route" aria-current={$page.url.pathname === '/a/deeply/nested/route'}
		>a deeply nested route</a
	>
	<a href="/route-api" aria-current={$page.url.pathname === '/route-api'}>route api</a>
	<a href="/expected" aria-current={$page.url.pathname === '/expected'}>page with expected error</a>
	<a href="/unexpected" aria-current={$page.url.pathname === '/unexpected'}
		>page with unexpected error</a
	>
	<a href="/a" aria-current={$page.url.pathname === '/a'}>a</a>
	<a href="/b" aria-current={$page.url.pathname === '/b'}>b</a>
	<a href="/a/b" aria-current={$page.url.pathname === '/a/b'}>/a/b</a>
	<a href="/a/b/c" aria-current={$page.url.pathname === '/a/b/c'}>/a/b/c</a>
	<a href="/ping" aria-current={$page.url.pathname === '/ping'}>ping</a>
	<a href="/ssr" aria-current={$page.url.pathname === '/ssr'}>ssr</a>
	<a href="/csr" aria-current={$page.url.pathname === '/csr'}>csr</a>
	<a href="/prerender" aria-current={$page.url.pathname === '/prerender'}>prerender</a>
	<a href="/always" aria-current={$page.url.pathname === '/always'}>/always</a>
	<a href="/always/" aria-current={$page.url.pathname === '/always'}>/always/</a>
	<a href="/ignore" aria-current={$page.url.pathname === '/ignore'}>/ignore</a>
	<a href="/ignore/" aria-current={$page.url.pathname === '/ignore'}>/ignore/</a>
	<a href="/never" aria-current={$page.url.pathname === '/never'}>/never</a>
	<a href="/never/" aria-current={$page.url.pathname === '/never'}>/never/</a>
	<!--
		- o SvelteKit pode acelerar as navegações antecipando- as. Quando um <a> elemento possui um data-sveltekit-preload-data atributo, o SvelteKit iniciará a navegação assim que o usuário passar o mouse sobre o link (no desktop) ou tocar nele (no celular).
	-->
	<a href="/slow-a" aria-current={$page.url.pathname === '/slow-a'} data-sveltekit-preload-data>slow-a</a>
	<a href="/slow-b" aria-current={$page.url.pathname === '/slow-b'}>slow-b</a>

	<a href="/en" aria-current={$page.url.pathname === '/en'}>english</a>
	<a href="/de" aria-current={$page.url.pathname === '/de'}>german</a>
	<a href="/fr" aria-current={$page.url.pathname === '/fr'}>french</a>

	<a href="/about2" aria-current={$page.url.pathname === "/about2"}>about2</a>
	<a href="/account" aria-current={$page.url.pathname === "/account"}>account</a>
	<a href="/app" aria-current={$page.url.pathname === "/app"}>app</a>

	{#each colors as color}
		<a href="/colors/{color}" aria-current={$page.url.pathname === `/colors/${color}`} style="--color: #{color}">#{color}</a>
	{/each}

	<!--aqui vamos usar o store navigating para mostrar um  indicador de carregamento para navegações de longa duração-->
	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
</nav>

<!--
  - O <slot /> elemento é onde o conteúdo da página será renderizado:
-->
<div class="layout" data-name="root">
	<slot />
</div>

<!--
  - A updated loja contém true ou false dependendo se uma nova versão do aplicativo foi implantada desde que a página foi aberta pela primeira vez.
  - As alterações de versão acontecem apenas na produção, não durante o desenvolvimento. Por esse motivo, $updated estará sempre false neste tutorial.
  - Você pode verificar manualmente se há novas versões, independentemente de pollInterval, chamando updated.check().
-->
{#if $updated}
	<p class="toast">
		A new version of the app is available

		<button on:click={() => location.reload()}> reload the page </button>
	</p>
{/if}

{#if previous && end && previous.to && previous.from}
	<p>navigated from {previous.from.url.pathname} to {previous.to.url.pathname} in <strong>{end - start}ms</strong></p>
{/if}

<p>the page has been open for {seconds} seconds</p>

<style>
	a{
		display: block;
		text-decoration: none;
	}

	nav{
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	a::before {
		content: '';
		width: 2em;
		height: 2em;
		background: var(--color);
	}

	:global(.layout) {
		position: relative;
		border: 1px solid #999;
		padding: 1em;
		margin: 1em 0 0 0;
		border-radius: 4px;
	}

	:global(.layout::before) {
		position: absolute;
		content: attr(data-name) ' layout';
		left: 1em;
		top: -1em;
		background-color: white;
		color: #222;
		padding: 0.5em;
		line-height: 1;
	}

	@media (prefers-color-scheme: dark) {
		:global(.layout::before) {
			background: #2e2e2e;
			color: #e6e6e6;
		}
	}
</style>