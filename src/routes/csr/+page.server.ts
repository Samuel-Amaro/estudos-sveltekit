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

//Assim como acontece com o ssr, você pode desativar completamente a renderização do lado do cliente:
//desativando a csr voltando a page home para ssr padrão
//Isso significa que nenhum JavaScript será fornecido ao cliente, mas também significa que seus componentes não serão mais interativos. Pode ser uma maneira útil de verificar se seu aplicativo é utilizável ou não para pessoas que - por qualquer motivo - não podem usar JavaScript.
export const csr = false;