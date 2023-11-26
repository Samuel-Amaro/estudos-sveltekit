export type TypeTodo = {
  id: string;
  description: string;
  done: boolean;
};

export type TypeUser = 
  {userid: string; todos: TypeTodo[]}
;