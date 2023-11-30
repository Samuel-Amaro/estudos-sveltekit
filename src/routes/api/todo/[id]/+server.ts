//Da mesma forma, podemos adicionar manipuladores para outros verbos HTTP.

import * as database from '$lib/server/database';

//AQUI CRIAMOS UMA ROTA DE API /api/todo/[id]/+server.ts
//ESTA FUNCTION IRA MANIPULAR UMA REQUEST HTTP COM METODO PUT POR CAUSA QUE EXPORTAMOS UMA PUT FUNCTION
//E IRAR RETORNAR UMA RESPONSE COM UM STATUS HTTP
export async function PUT({ params, request, cookies }) {
	const { done } = await request.json();
	const userid = cookies.get('userid') as string;

	//altera o status de uma todo no db fake
	await database.toggleTodo(userid, params.id, done);
	//Como não precisamos retornar nenhum dado real ao navegador, estamos retornando uma resposta vazia com status 204 Sem conteúdo .
	return new Response(null, { status: 204 });
}

//ESTA FUNCTION IRA MANIPULAR UMA REQUEST HTTP COM METODO DELETE POR CAUSA QUE EXPORTAMOS UMA PUT FUNCTION
export async function DELETE({ params, cookies }) {
	const userid = cookies.get('userid') as string;

	//exclui uma todo do db fake
	await database.deleteTodo(userid, params.id);

	//Como não precisamos retornar nenhum dado real ao navegador, estamos retornando uma resposta vazia com status 204 Sem conteúdo .
	return new Response(null, { status: 204 });
}
