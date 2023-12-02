<!--
  - BREAKING OUT OF LAYOUTS(SAINDO DOS LAYOUTS)
  - Normalmente, uma página herda todos os layouts acima dela, o que significa que src/routes/a/b/c/+page.svelte herda quatro layouts:
    - src/routes/+layout.svelte
    - src/routes/a/+layout.svelte
    - src/routes/a/b/+layout.svelte
    - src/routes/a/b/c/+layout.svelte
  - Ocasionalmente, é útil sair da hierarquia de layout atual. Podemos fazer isso adicionando o @ sinal seguido do nome do segmento pai para 'redefinir' - por exemplo +page@b.svelte colocaria /a/b/c dentro src/routes/a/b/+layout.svelte, enquanto +page@a.svelte colocaria dentro src/routes/a/+layout.svelte.
  - Vamos redefini-lo para o layout raiz, renomeando-o para +page@.svelte.
  - O layout raiz se aplica a todas as páginas do seu aplicativo, você não pode sair dele.
-->

<h1>c</h1>