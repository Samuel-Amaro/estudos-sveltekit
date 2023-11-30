<script lang="ts">
	import { browser } from "$app/environment";

  /* CSR(CLIENT SERVER RENDERING)
   * 
   * A renderização do lado do cliente é o que torna a página interativa - como incrementar o contador quando você clica no botão neste aplicativo - e permite que o SvelteKit atualize a página durante a navegação sem recarregar a página inteira.
   * 
   * so é valido se csr estiver como true no +page.server.ts
  */

  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<h1>Rendered {browser ? 'in the browser' : 'on the server'}</h1>

<button on:click={increment}>
	Clicks: {count}
</button>