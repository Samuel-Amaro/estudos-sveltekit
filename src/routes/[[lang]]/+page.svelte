<script>
	export let data;
  /**
   * * ADVANCED ROUTING - OPTIONAL PARAMETERS
   * 
   * Às vezes é útil tornar um parâmetro dinamico de rota opcional. Um exemplo clássico é quando você usa o nome do caminho para determinar a localidade — /fr/... e /de/... assim por diante — mas também deseja ter uma localidade padrão.
   * 
   * Para fazer isso, usamos colchetes duplos. Renomeie o [lang] diretório para [[lang]].
   * 
   * O aplicativo agora falha ao ser compilado porque src/routes/+page.sveltee src/routes/[[lang]]/+page.svelte ambos corresponderiam a /. Excluir src/routes/+page.svelte. (Pode ser necessário recarregar o aplicativo para se recuperar da página de erro).
  */

 //aqui definimos o [[lang]] como uma localidade padrão, assim quando acessar / o text do idioma padrão aparece
 //src/routes/+page.svelte e src/routes/[[lang]]/+page.svelte corresponde a /
 //e necessario excluir um src/+page.svelte e seus irmãos +page.ts para que atributo dinamico opcional funcione
</script>

<h1>{data.greeting}</h1>
