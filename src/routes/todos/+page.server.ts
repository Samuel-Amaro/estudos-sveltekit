import type { PageServerLoad } from './$types';
import * as db from "$lib/server/database";
import { fail } from '@sveltejs/kit';

//declaramos uma function de carregamento, de dados para a page /
//Uma load função em um +page.ts arquivo é executada no servidor e no navegador (a menos que combinada com export const ssr = false, nesse caso só será executada no navegador ). Se sua load função deve sempre ser executada no servidor (porque usa variáveis ​​de ambiente privadas, por exemplo, ou acessa um banco de dados), então ela entraria em a +page.server.ts.
//Observe que o tipo mudou de PageLoad para PageServerLoad, porque loadas funções do servidor podem acessar argumentos adicionais. Para entender quando usar +page.ts e quando usar +page.server.ts, veja Universal vs servidor.
//dependendo se usa +page.server.ts ou somente +page.ts como irmã de uma page para carregamento de dados o tipo do load pode variar entre PageServerLoad ou PageLoad

/**
 * * HEADERS AND COOKIES
 * 
 * Dentro de uma função de carregamento (bem como em ações de formulário, ganchos e rotas de API, sobre as quais aprenderemos mais tarde), você tem acesso a uma função setHeaders, que — sem surpresa — pode ser usada para definir cabeçalhos na resposta.
 * 
 * Mais comumente, você o usaria para personalizar o comportamento do cache com o cabeçalho de resposta Cache-Control, mas neste tutorial faremos algo menos aconselhável e mais dramático:
*/

//Tanto as funções de servidor quanto as universais load têm acesso a uma setHeaders função que, quando executada no servidor, pode definir cabeçalhos para a resposta. (Quando executado no navegador, setHeadersnão tem efeito.)

/*export const load: PageServerLoad = ({setHeaders}) => {
	setHeaders({
    'Content-Type': "text/plain"
  });
}*/

/**
 * * READING AND WRITING COOKIES
 * 
 * A setHeaders função não pode ser usada com o Set-Cookie cabeçalho. Em vez disso, você deve usar a cookiesAPI.
 * 
 * Nas suas load funções, você pode ler um cookie com cookies.get(name, options):
 * 
 * Para definir um cookie, use cookies.set(name, value, options). É altamente recomendável que você configure explicitamente pathao definir um cookie, já que o comportamento padrão dos navegadores — um tanto inútil — é definir o cookie no pai do caminho atual.
 * 
 * A chamada cookies.set(name, ...)faz com que um Set-Cookiecabeçalho seja escrito, mas também atualiza o mapa interno de cookies, o que significa que quaisquer chamadas subsequentes cookies.get(name)durante a mesma solicitação retornarão o valor atualizado. Nos bastidores, a cookiesAPI usa o cookiepacote popular - as opções passadas cookies.gete cookies.setcorrespondem às opções parsee serializeda cookie documentação

*/

//function de carregamento de dados, trabalhando com cookie
//vamos usar a cookiesAPI dentro da load function 
/*export const load: PageServerLoad = ({cookies}) => {
  //lendo um cookie
	const visited = cookies.get('visited');

  //definindo um cookie
  cookies.set('visited', 'true', {path: "/"});
  
  return {
    visited
  };
}*/

//function de carregamento de dados para a route /
//vamos usa a cookies API para que possamos ter uma lista de tarefas por usuario
export const load: PageServerLoad = ({cookies}) => {
  const id = cookies.get("userid");

  if(!id) {
    cookies.set("userid", crypto.randomUUID(), {path: "/"});
  }

  //os dados a serem retornados pela function load
  return {
    todos: db.getTodos(id as string) ?? []
  }
};

//criando uma action aqui no server para lidar com uma request POST na rota /, esta action ira lidar com uma request POST feita na page /
//Um +page.server.ts arquivo pode exportar ações , que permitem enviar POST dados para o servidor usando o <form> elemento.
//Ao usar o <form>, o JavaScript do lado do cliente é opcional, mas você pode aprimorar progressivamente as interações do formulário com JavaScript para fornecer a melhor experiência do usuário.
//As ações sempre utilizam POST solicitações, pois GET as solicitações nunca devem ter efeitos colaterais.
export const actions = {
  //No caso mais simples, uma página declara uma default ação:
  //uma action permitem enviar POST dados para o servidor usando o <form> elemento
  //o browser enviaaria os dados do formulario via POST request ao servidor, executando a action padrão, ou action nomeados
  /*default: async ({cookies, request}) => {
    //obtem os dados do form via request POST e armazena no nosso db fake
    //A solicitação(request) é um objeto Request padrão; await request.formData() retorna uma instância FormData(conjunto de pares key/value representando campos de formulario e seus valores).  
    //Quando pressionamos Enter, o banco de dados(insere novos valores no array) é atualizado e a página é recarregada com os novos dados.
    //Observe que não tivemos que escrever nenhum código de busca ou algo parecido — os dados são atualizados automaticamente. E como estamos usando um elemento <form>, este aplicativo funcionaria mesmo se o JavaScript estivesse desabilitado ou indisponível.
    const data = await request.formData();
    db.createTodo(cookies.get('userid') as string, data.get('description') as FormDataEntryValue as string)
  }*/

  //Uma página que possui apenas uma ação(action) é, na prática, bastante rara. Na maioria das vezes você precisará ter múltiplas ações em uma página. 
  //vamos substituir a default action por actions nomeadas create e delete
  //As actions default não podem coexistir com ações nomeadas.
  //aqui temos uma action nomeada para criar umm todo no nosso db fake e salvar
  create: async ({cookies, request}) => {
    //simulando uma rede lenta adicionando uma atraso artificial as nossas actions
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
    //obtem os dados do form via request POST e armazena no nosso db fake
    //A solicitação(request) é um objeto Request padrão; await request.formData() retorna uma instância FormData(conjunto de pares key/value representando campos de formulario e seus valores).  
    //o banco de dados(insere novos valores no array) é atualizado e a página é recarregada com os novos dados.
    const data = await request.formData();

    //Os usuários são um grupo travesso, que enviará todos os tipos de dados sem sentido se tiver oportunidade. Para evitar que causem caos, é importante validar os dados do formulário.
    //Para se proteger contra esse tipo de travessura, você deve sempre usar a validação do lado do servidor.
    try {
      //para validação amigavel para o user
      //Seria muito melhor permanecer na mesma página e fornecer uma indicação do que deu errado para que o usuário possa consertar. Para fazer isso, podemos usar a fail função para retornar dados da ação junto com um código de status HTTP apropriado:
      db.createTodo(cookies.get('userid') as string, data.get('description') as FormDataEntryValue as string)
      //Você também pode retornar dados de uma ação sem envolvê-la fail— por exemplo, para mostrar um 'sucesso!' mensagem quando os dados foram salvos - e estarão disponíveis através do formprop.
      return {
        message: "Sucess!"
      }
    } catch (error) {
        //fail função para retornar dados da ação junto com um código de status HTTP apropriado:
        return fail(422, {
          description: data.get('description') as FormDataEntryValue as string,
          error: error?.message
        })
    }
    
  },

  //aqui temos outra action nomeada para deletar uma todo do nosso db fake
  delete: async ({ cookies, request }) => {
    //simulando uma rede lenta adicionando uma atraso artificial as nossas actions
    await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid') as string, data.get('id') as FormDataEntryValue as string);
	}
};