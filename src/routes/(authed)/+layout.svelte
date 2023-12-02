<!--
  - ROUTE GROUPS
  - 
  - Como vimos na introdução ao roteamento , os layouts são uma forma de compartilhar a UI e a lógica de carregamento de dados entre diferentes rotas.
  - Às vezes é útil usar layouts sem afetar a rota — por exemplo, você pode precisar que suas rotas /app e /account estejam protegidas por autenticação, enquanto sua /about página está aberta para o mundo. Podemos fazer isso com um grupo de rotas , que é um diretório entre parênteses.
  - Crie um (authed) grupo renomeando account para e (authed)/account depois renomeando app para (authed)/app.
  - Agora podemos controlar o acesso a essas rotas criando
  - Se você tentar visitar essas páginas, será redirecionado para a /login rota, que possui uma ação de formulário src/routes/login/+page.server.js que define o logged_incookie.
  - Também podemos adicionar alguma UI a essas duas rotas adicionando um src/routes/(authed)/+layout.svelte arquivo:
-->

<slot />

<form method="POST" action="/logout">
	<button>log out</button>
</form>