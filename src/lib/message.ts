//coloque os arquivos que deseja importar através do alias `$lib` nesta pasta.
/**
 * * O $lib ALIAS
 * 
 *  Como o SvelteKit usa roteamento baseado em diretório, é fácil colocar módulos e componentes ao lado das rotas que os utilizam. Uma boa regra é 'colocar o código perto de onde ele é usado'.
 * 
 * Às vezes, o código é usado em vários lugares. Quando isso acontece, é útil ter um local para colocá-los que possa ser acessado por todas as rotas sem a necessidade de prefixar as importações com ../../../../. No SvelteKit, esse local é o src/libdiretório. Qualquer coisa dentro deste diretório pode ser acessada por qualquer módulo através srcdo $lib alias.
*/

export const message = 'hello from $lib/message';
