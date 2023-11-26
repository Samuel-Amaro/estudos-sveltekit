// Em um aplicativo real, esses dados residiriam em um banco de dados,
// em vez de na memória. Mas, por enquanto, nós trapaceamos.
//criamos uma banco de dados na memoria que e um array de objetos

import type { TypeTodo, TypeUser } from "$lib/types/todo.type";

const db: TypeUser[] = [];

export function getTodos(userid: string) {
	const foundUser = db.find((user) => user.userid === userid);
  
  if(!foundUser) {
    db.push({userid: userid, todos: [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]})
  }

	return foundUser?.todos;
}

export function createTodo(userid: string, description: string) {
  if(description === '') {
    //usando validação do lado do servidor para evitar travessuras do user
    //validando se a descrição existe e é unica
    throw new Error("todo must have a description");
  }

	const user = db.find((user) => user.userid === userid);

  if(user) {
    
    if(user.todos.find((todo) => todo.description === description)) {
      throw new Error("todos must be unique");
    }

    const id = crypto.randomUUID();

    user.todos.push({
      id: id,
      description,
      done: false
    });

    return {
      id
    }
  }
}

export function deleteTodo(userid: string, todoid: string) {
	const user = db.find((user) => user.userid === userid);
  if(user) {
	  const index = user.todos.findIndex((todo) => todo.id === todoid);

    if (index !== -1) {
      user.todos.splice(index, 1);
    }
  }
}

export function toggleTodo(userid: string, id: string, done: boolean) {
  const user = db.find((user) => user.userid === userid);
  if(user) {
	  user.todos.map((todo) => {
      if(todo.id === id) {
        todo.done = done;
        return todo;
      }
      return todo;
    })
  }
}