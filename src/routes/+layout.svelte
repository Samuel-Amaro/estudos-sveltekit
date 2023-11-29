<script lang="ts">
	import { navigating, page, updated } from "$app/stores";

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
  */
</script>

<nav>
  <!--vamos usar a store $page.URL.pathname para acessar o nome do caminho atual-->
  <a href="/" target="_self" rel="next" aria-current={$page.url.pathname === "/"}>home</a>
  <a href="/todos" target="_self" rel="next" aria-current={$page.url.pathname === "/todos"}>todos</a>
  <a href="/about" target="_self" rel="next" aria-current={$page.url.pathname === "/about"}>about</a>
  <a href="/blog" target="_self" rel="next" aria-current={$page.url.pathname === "/blog"}>blog</a>
  <a href="/a/deeply/nested/route" aria-current={$page.url.pathname === "/a/deeply/nested/route"}>a deeply nested route</a>
  <a href="/route-api" aria-current={$page.url.pathname === "/route-api"}>route api</a>
  <a href="/expected" aria-current={$page.url.pathname === "/expected"}>page with expected error</a>
  <a href="/unexpected" aria-current={$page.url.pathname === "/unexpected"}>page with unexpected error</a>
  <a href="/a" aria-current={$page.url.pathname === "/a"}>a</a>
  <a href="/b" aria-current={$page.url.pathname === "/b"}>b</a>

  <!--aqui vamos usar o store navigating para mostrar um  indicador de carregamento para navegações de longa duração-->
  {#if $navigating}
    navigating to {$navigating.to?.url.pathname}
  {/if}
</nav>

<!--
  - O <slot /> elemento é onde o conteúdo da página será renderizado:
-->
<slot />

<!--
  - A updated loja contém true ou false dependendo se uma nova versão do aplicativo foi implantada desde que a página foi aberta pela primeira vez.
  - As alterações de versão acontecem apenas na produção, não durante o desenvolvimento. Por esse motivo, $updated estará sempre false neste tutorial.
  - Você pode verificar manualmente se há novas versões, independentemente de pollInterval, chamando updated.check().
-->
{#if $updated}
	<p class="toast">
		A new version of the app is available

		<button on:click={() => location.reload()}>
			reload the page
		</button>
	</p>
{/if}