/**
 * * PAGE OPTIONS - BASICS(FUNDAMENTOS)
 *
 * ssr(server side rendering) - se as páginas devem ou não ser renderizadas pelo servidor
 * csr(client server rendering) — se deve carregar o cliente SvelteKit
 * prerender — se deve pré-renderizar páginas em tempo de construção, em vez de por solicitação
 * trailingSlash — se deve remover, adicionar ou ignorar barras finais em URLs
 *
 * As opções de página podem ser aplicadas a páginas individuais (se exportadas de +page.jsou +page.server.js) ou grupos de páginas (se exportadas de +layout.jsou +layout.server.js). Para definir uma opção para todo o aplicativo, exporte-o do layout raiz. Os layouts e páginas filho substituem os valores definidos nos layouts pai, portanto, por exemplo, você pode ativar a pré-renderização para todo o seu aplicativo e desativá-la para páginas que precisam ser renderizadas dinamicamente.
 *
 * Você pode misturar e combinar essas opções em diferentes áreas do seu aplicativo – você pode pré-renderizar suas páginas de marketing, renderizar dinamicamente no servidor suas páginas orientadas por dados e tratar suas páginas de administração como um SPA renderizado pelo cliente. Isso torna o SvelteKit muito versátil.
 *
 */

/**
 * * OPTIONS DE PAGE - TRAILINGSLASH
 *
 * Dois URLs semelhantes /fooe /foo/podem parecer iguais, mas na verdade são diferentes. Um URL relativo como ./barserá resolvido /barno primeiro caso e /foo/barno segundo, e os mecanismos de pesquisa irão tratá-los como entradas separadas, prejudicando o seu SEO.
 *
 * Resumindo, ser descuidado com as barras finais é uma má ideia. Por padrão, o SvelteKit remove as barras finais, o que significa que uma solicitação /foo/resultará em um redirecionamento para /foo.
 *
 * Se, em vez disso, você quiser garantir que uma barra final esteja sempre presente, você pode especificar a trailingSlash opção adequadamente:
 *
 * A aplicação ou não de barras finais afeta a pré-renderização. Um URL semelhante /always/será salvo no disco como, always/index.htmlenquanto um URL semelhante /neverserá salvo como never.html.
 */

//Para acomodar ambos os casos (isso não é recomendado!), use 'ignore':
//isso ira permitir requests com /no final e deixar o svelte remover as barras no final
//O valor padrão é 'never'.
export const trailingSlash = 'ignore';
