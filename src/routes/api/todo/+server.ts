import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database';
import type { TypeTodo } from '$lib/types/todo.type.js';

//AQUI CRIAMOS UMA ROTA DE API /route-api
//ESTA FUNCTION IRA MANIPULAR UMA REQUEST HTTP COM METODO POST POR CAUSA QUE EXPORTAMOS UMA POST FUNCTION
//E IRAR RETORNAR UMA RESPONSE COM UM JSON
//Você também pode adicionar manipuladores que alteram dados, como POST. Na maioria dos casos, você deve usar ações de formulário — você acabará escrevendo menos código e ele funcionará sem JavaScript, tornando-o mais resiliente.
export async function POST({ request, cookies }) {
  //request e um objeto Request padrão
  //await request.json() retorna os dados que postamos do manipulador de eventos.
	const { description } = await request.json() as TypeTodo;

	const userid = cookies.get('userid') as string;
	const { id } = await database.createTodo(userid, description) as {
    id: string
  };

  //Estamos retornando uma resposta com o status 201 Criado e o id da tarefa recém-gerada em nosso banco de dados.
	return json({ id }, { status: 201 });
}