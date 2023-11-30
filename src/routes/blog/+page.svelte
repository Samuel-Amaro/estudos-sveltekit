<!--
  - cria uma rota /blog, uma page no nosso aplicativo
-->

<script lang="ts">
	import type { PageData } from './$types';

	//Um +page.svelte arquivo pode ter um irmão +page.server.ts que exporta uma load função, cujo valor de retorno está disponível para a página através da data prop
	//podemos acessar os dados do carregamento por meio do data prop, para ser usado como dados para a page
	export let data: PageData;
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
		</li>
	{/each}
</ul>
