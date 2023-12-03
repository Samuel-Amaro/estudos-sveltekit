<script lang="ts">
	export let data;

  /**
   * * USING PARENT DATA
   * 
   * Como vimos na introdução aos dados de layout, os componentes +page.svelte e +layout.svelte têm acesso a tudo retornado de suas funções de carregamento pai.
   * 
   * Ocasionalmente é útil para as load próprias funções acessarem dados de seus pais. Isso pode ser feito com await parent().
   * 
   * Para mostrar como funciona, somaremos dois números provenientes de loadfunções diferentes.
   * 
   * Primeiro, retorne alguns dados de src/routes/+layout.server.js:
  */
</script>

<p>{data.a} + {data.b} = {data.c}</p>
<p><a href="/">home</a></p>