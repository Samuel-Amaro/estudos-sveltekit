<script lang="ts">
	import { page } from '$app/stores';

  /**
   * * PARAM MATCHERS
   * 
	 * Para evitar que o roteador corresponda a uma entrada inválida, você pode especificar um matcher . Por exemplo, você pode querer que uma rota /colors/[value] corresponda a valores hexadecimais /colors/ff3e00, mas não a cores nomeadas /colors/octarine, ou qualquer outra entrada arbitrária.
	 * 
   * para usar o novo matcher, renomeie
   * 
   * src/routes/colors/[color]para src/routes/colors/[color=hex].
   * 
   * Agora, sempre que alguém navegar para essa rota, o SvelteKit verificará se esse color é um valor válido hex. Caso contrário, o SvelteKit tentará combinar outras rotas, antes de retornar um 404.
   * 
   * Os matchers são executados no servidor e no navegador.
  */
</script>

<div class="color" style="--color: #{$page.params.color}">
	<span>#{$page.params.color}</span>
</div>

<style>
	.color {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color);
		transition: background-color 0.2s;
	}

	span {
		mix-blend-mode: soft-light;
		color: black;
		font-size: 4em;
	}
</style>
