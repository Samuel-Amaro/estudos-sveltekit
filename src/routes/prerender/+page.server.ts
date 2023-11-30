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
 * * PAGE OPTIONS - PRERENDER
 * 
 * Pré-renderizar significa gerar HTML para uma página uma vez, no momento da construção, em vez de dinamicamente para cada solicitação.
 * 
 * A vantagem é que servir dados estáticos é extremamente barato e de alto desempenho, permitindo atender facilmente um grande número de usuários sem se preocupar com cabeçalhos de controle de cache (que são fáceis de errar).
 * 
 * A desvantagem é que o processo de construção leva mais tempo e o conteúdo pré-renderizado só pode ser atualizado com a construção e implantação de uma nova versão do aplicativo.
 * 
 * Para pré-renderizar uma página, defina prerendercomo true:
 * 
 * Aqui no tutorial, isso não terá nenhum efeito observável, pois o aplicativo está sendo executado no dev modo.
 * 
 * Nem todas as páginas podem ser pré-renderizadas. A regra básica é esta: para que o conteúdo seja pré-renderizável, quaisquer dois usuários que acessem diretamente devem obter o mesmo conteúdo do servidor, e a página não deve conter ações de formulário. Páginas com parâmetros de rota dinâmica podem ser pré-renderizadas desde que sejam especificadas na prerender.entriesconfiguração ou podem ser acessadas seguindo links de páginas que estão em prerender.entries.
 * 
 * Configurar prerender como true dentro de sua raiz +layout.server.js transforma efetivamente o SvelteKit em um gerador de site estático (SSG).
 */

//aqui vamos definir a option da page para pre-renderizar a páge home
export const prerender = true;