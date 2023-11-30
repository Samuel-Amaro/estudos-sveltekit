/**
 * * HOOKS - HANDLE
 * 
 *  SvelteKit fornece vários ganchos — maneiras de interceptar e substituir o comportamento padrão do framework.
 * 
 * 'Hooks' são funções de todo o aplicativo que você declara que o SvelteKit chamará em resposta a eventos específicos, dando a você um controle refinado sobre o comportamento do framework.
 * 
 * Existem dois arquivos de ganchos, ambos opcionais:
 * 
 * src/hooks.server.js– os ganchos do servidor do seu aplicativo
 * src/hooks.client.js– os ganchos do cliente do seu aplicativo
 * 
 * O código nesses módulos será executado quando o aplicativo for inicializado, tornando-os úteis para inicializar clientes de banco de dados e assim por diante.
 * 
 * O gancho(hook) mais elementar é o handle, que fica em src/hooks.server.js. Ele recebe um objeto de event junto com uma função de resolve e retorna uma response.
 * 
 * resolve é onde a mágica acontece: o SvelteKit combina o URL da solicitação recebida com uma rota do seu aplicativo, importa o código relevante ( +page.server.js e +page.svelte arquivos e assim por diante), carrega os dados necessários para a rota e gera a resposta.
 * 
 * O handle gancho padrão é assim:
*/

//TODO: CONTINUAR DEPOIS OS ESTUDOS DE HOOKS, PULEI ESTA PARTE

import type { Handle } from "@sveltejs/kit";

//o handle hook padrão é assim
//Esta função é executada sempre que o servidor SvelteKit recebe uma solicitação – seja durante a execução do aplicativo ou durante a pré-renderização – e determina a resposta . Ele recebe um event objeto que representa a solicitação e uma função chamada resolve, que renderiza a rota e gera um arquivo Response. Isso permite modificar cabeçalhos ou corpos de resposta ou ignorar totalmente o SvelteKit (para implementar rotas programaticamente, por exemplo).
export const handle: Handle = async ({event, resolve}) => {
  //o handle hook padrão é assim
  //return await resolve(event);

  //Você também pode criar rotas totalmente novas:
  //substituindo um comportamento padrão
  if(event.url.pathname === "/ping") {
    return new Response('pong')
  }

  //Para páginas (em oposição às rotas de API ), você pode modificar o HTML gerado com transformPageChunk
  return await resolve(event, {
    transformPageChunk: ({html}) => html.replace('<body', '<body style="color: hotpink"')
  });
}