<script lang="ts">
	import type { LayoutData, PageData } from "./$types";

  /**
   * * DADOS DE LAYOUT
   * 
   * Assim como os arquivos +layout.svelte criam UI para cada rota secundária, os arquivos +layout.server.ts carregam dados para cada rota secundária.
   * 
   * O layout (e a página abaixo dele) herda data.summaries do pai +layout.server.ts.
   * 
   * Quando navegamos de um post para outro, precisamos apenas carregar os dados do próprio post — os dados do layout ainda são válidos. Consulte a documentação sobre invalidação para saber mais.
  */

  //Os dados retornados das load funções de layout estão disponíveis para +layout.svelte os componentes filhos e para o +page.svelte componente, bem como para o layout ao qual ele “pertence”.
  //podemos acessar os dados do carregamento por meio do data prop
	export let data: LayoutData;
</script>

<div class="layout">
	<main>
    <!--  
      - O <slot /> elemento é onde o conteúdo da página será renderizado:
    -->
		<slot />
	</main>

	<aside>
		<h2>More posts</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/blog/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
