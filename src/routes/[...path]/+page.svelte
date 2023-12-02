<script lang="ts">
	import { page } from '$app/stores';

  /**
   * * REST PARAMETERS
   * 
   *  Para corresponder a um número desconhecido de segmentos de caminho, use um [...rest] parâmetro,
   * 
   * Renomeie src/routes/[path] para src/routes/[...path]. A rota agora corresponde a qualquer caminho.
	 * 
	 * Outras rotas mais específicas serão testadas primeiro, tornando os parâmetros de descanso úteis como rotas 'catch-all'. Por exemplo, se você precisasse de uma página 404 personalizada para páginas dentro de /categories/..., você poderia adicionar estes arquivos:
	 * 
	 * src/routes/
		├ categories/
		│ ├ animal/
		│ ├ mineral/
		│ ├ vegetable/
		│ ├ [...catchall]/
		│ │ ├ +error.svelte
		│ │ └ +page.server.js
	 * 
	 * Dentro do +page.server.jsarquivo, throw error(404)dentro de load.
	 * 
	 * Os parâmetros restantes não precisam ir no final - uma rota como /items/[...path]/edit ou /items/[...path].json é totalmente válida.
  */

	//para ver como funciona este rest paramenter digitar na url /path/test/new

	let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];

	$: depth = $page.params.path.split('/').filter(Boolean).length;
	$: next = depth === words.length ? '/' : `/${words.slice(0, depth + 1).join('/')}`;
</script>

<div class="flex">
	{#each words.slice(0, depth) as word}
		<p>{word}</p>
	{/each}

	<p><a href={next}>{words[depth] ?? '?'}</a></p>
</div>

<style>
	.flex {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		margin: 0.5rem 0;
		line-height: 1;
	}

	a {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		font-size: 4rem;
	}
</style>
