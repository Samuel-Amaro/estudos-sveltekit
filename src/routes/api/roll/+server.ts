/**
 * * API ROUTES
 * 
 * SvelteKit permite criar mais do que apenas páginas. Também podemos criar rotas de API adicionando um +server.ts arquivo que exporta funções correspondentes aos métodos HTTP: GET, PUT, e .POST PATCH DELETE
 * 
 * Os manipuladores de solicitação devem retornar um objeto Response . Como é comum retornar JSON de uma rota de API, o SvelteKit fornece uma função conveniente para gerar estas respostas:
*/

import { json } from "@sveltejs/kit";

//AQUI CRIAMOS UMA ROTA DE API /roll
//ESTA FUNCTION IRA MANIPULAR UMA REQUEST HTTP COM METODO GET POR CAUSA QUE EXPORTAMOS UMA GET FUNCTION
//E IRAR RETORNAR UMA RESPONSE COM UM JSON
//Além das páginas, você pode definir rotas com um +server.jsarquivo (às vezes chamado de 'rota de API' ou 'endpoint'), que lhe dá controle total sobre a resposta. Seu +server.jsarquivo exporta funções correspondentes a verbos HTTP como GET, POST, PATCH, PUT, DELETE, OPTIONS, e HEADque recebem um RequestEvent argumento e retornam um Response objeto.
export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  return json(number);
}