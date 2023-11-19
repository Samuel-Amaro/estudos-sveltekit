<!--
  - PARÂMETROS DE ROTA
  - Para criar rotas com parâmetros dinâmicos, use colchetes em torno de um nome de variável válido. 
  - aqui neste exemplo criamos uma rota que corresponda a /blog/one, /blog/two, /blog/three
  - Vários parâmetros de rota podem aparecer em um segmento de URL, desde que sejam separados por pelo menos um caractere estático: foo/[bar]x[baz] é uma rota válida onde [bar]e [baz]são parâmetros dinâmicos.
-->

<script lang="ts">
	import type { PageData } from "./$types";

  //Um +page.svelte arquivo pode ter um irmão +page.server.ts que exporta uma load função, cujo valor de retorno está disponível para a página através da data prop
  //podemos acessar os dados do carregamento por meio do data prop
  export let data: PageData;
</script>

<h1>{data.post?.title}</h1>
<div>{@html data.post.content}</div>