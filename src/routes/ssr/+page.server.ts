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
 * * PAGE OPTIONS - SSR(SERVER SIDE RENDERING)
 *
 * A renderização do lado do servidor (SSR) é o processo de geração de HTML no servidor e é o que o SvelteKit faz por padrão. É importante para o desempenho e a resiliência e é muito benéfico para a otimização de mecanismos de pesquisa (SEO). Embora alguns mecanismos de pesquisa possam indexar conteúdo renderizado no navegador com JavaScript, isso acontece com menos frequência e de forma confiável.
 *
 * Dito isto, alguns componentes não podem ser renderizados no servidor, talvez porque esperam poder acessar os globais do navegador windowimediatamente. Se puder, você deve alterar esses componentes para que possam ser renderizados no servidor, mas se não puder, poderá desabilitar o SSR:
 *
 * Configurar ssr como false dentro de sua raiz +layout.server.js transforma efetivamente todo o seu aplicativo em um aplicativo de página única (SPA).
 */

//desabilitando o ssr da home
//por padrão o svelte renderiza pages ssr
//export const ssr = false;
