import type { PageServerLoad } from "../$types";
import * as db from "$lib/server/database";

//function de carregamento de dados para a route /route-api
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