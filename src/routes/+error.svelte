<script lang="ts">
	import { page } from '$app/stores';
	import { emojis } from "./emojis";

  /**
   * * PÁGINAS DE ERRORS
   * 
   * Quando algo dá errado dentro de uma load função, o SvelteKit renderiza uma página de erro.
   * 
   * A página de erro padrão é um tanto branda. Podemos personalizá-lo criando um src/routes/+error.svelte componente:
   * 
   * Observe que o +error.svelte componente é renderizado dentro do root +layout.svelte. Podemos criar +error.svelte limites mais granulares.
  */
</script>

{#if $page.error}
  <h1>{$page.status} {$page.error.message}</h1>
  <span style="font-size: 10em">
    {emojis[$page.status] ?? emojis[500]}
  </span>
{/if}
