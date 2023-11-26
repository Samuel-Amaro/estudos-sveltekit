<!--
  - LAYOUTS
  - Rotas diferentes do seu aplicativo geralmente compartilham uma interface de usuário comum. Em vez de repeti-lo em cada +page.svelte componente, podemos usar um +layout.svelte componente que se aplica a todas as rotas no mesmo diretório.
  - Um +layout.svelte arquivo se aplica a cada rota filha, incluindo a irmã +page.svelte(se existir). Você pode aninhar layouts em profundidade arbitrária.
-->

<nav>
  <a href="/" target="_self" rel="next">home</a>
  <a href="/about" target="_self" rel="next">about</a>
  <a href="/blog" target="_self" rel="next">blog</a>
  <a href="/a/deeply/nested/route">a deeply nested route</a>
  <a href="/route-api">route api</a>
</nav>

<!--
  - O <slot /> elemento é onde o conteúdo da página será renderizado:
-->
<slot />