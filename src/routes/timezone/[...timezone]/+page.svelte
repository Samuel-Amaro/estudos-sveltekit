<script lang="ts">
	import { onMount } from "svelte";
  import type { PageData } from "./$types";
	import { invalidate, invalidateAll } from "$app/navigation";

	/**
	 * * INVALIDAÇÃO(invalidation)
	 * 
	 * Quando o usuário navega de uma página para outra, o SvelteKit chama suas load funções, mas apenas se achar que algo mudou.
	 * 
	 * Neste exemplo, navegar entre fusos horários faz com que a função de carregamento(load) em src/routes/[...timezone]/+page.js seja executada novamente porque params.timezone é inválido. Mas a função de carregamento em src/routes/+layout.js não é executada novamente, porque no que diz respeito ao SvelteKit ela não foi invalidada pela navegação.
	 * 
	 * Podemos corrigir isso invalidando-o manualmente usando a função invalidate(...) , que pega uma URL e executa novamente quaisquer funções de carregamento(load) que dependam dela. Como a função de carregamento em src/routes/+layout.js chama fetch('/api/now'), ela depende de /api/now.
	 * 
	 * Em src/routes/[...timezone]/+page.svelte, adicione um onMount retorno de chamada(callback) que chama invalidate('/api/now')uma vez por segundo:
	 * 
	 * Você também pode passar uma função para invalidate, caso queira invalidar com base em um padrão e não em URLs específicos
	 * 
	 * * CUSTOM DEPENDENCIES
	 * 
	 * Finalmente, existe a opção nuclear – invalidateAll(). Isso executará novamente indiscriminadamente todas as loadfunções da página atual, independentemente de onde elas dependam.
	 * 
	 * invalidate(() => true) e invalidateAll não são iguais. invalidateAll também executa novamente funções de carregamento(load) sem nenhuma dependência de URL, o que invalidate(() => true) não faz.
	 * 
	*/

	export let data: PageData;

	onMount(() => {
		//ira ficar atualizado a hora a cada segundo como um relogia atual
		const interval = setInterval(() => {
			//invalidate('/api/now');
			//invlaidados uma url usando uma chave de url personalizada para invalida a url /api/now
			//invalidate("data:now");
			//executa todoas as load functions da page atual independente de onde elas dependam
			//aqui no caso ira executar a /timezone/+layout.ts é /api/now e +page.ts daqui mesmo desta page
			invalidateAll();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>
	{new Intl.DateTimeFormat([], {
		timeStyle: 'full',
		timeZone: data.timezone
	}).format(new Date(data.now))}
</h1>