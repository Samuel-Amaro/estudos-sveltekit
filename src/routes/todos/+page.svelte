<svelte:head>
	<title>Todos</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<script lang="ts">
  import { message } from "$lib/message";
	import { enhance } from "$app/forms";
	import { fly, slide } from "svelte/transition";
	import type { TypeTodo } from "$lib/types/todo.type.js";

  //podemos acessar os dados retornados do carregamento(load) por meio do data prop
  export let data;
	//podemos acessar o valor retornado de uma validação de formulario por meio de uma action por meio da form prop, que so e preenchida apos o envio do formulario
	export let form;

	//add um state local na page
	let creating = false;
	let deleting: string[] = [];
</script>

<!--<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>-->
<p>this is the home page</p>
<p>{message}</p>

<!--
  - O ELEMENTO <form>
  - quando precisamos enviar ou transferir dados do navegador para o servidor, eai que o <form> entra - a forma de envio de dados da plataforma web
-->
<div class="centered">
  <h1>todos</h1>

	<!--mensagem de validação do form-->
	{#if form?.error}
		<p class="error">{form.error}</p>
		{:else if form?.message}
		<p class="sucess">{form.message}</p>
	{/if}
	

  <!--
    - Se digitarmos algo <input> e pressionarmos Enter, o navegador fará uma solicitação POST (por causa do method="POST" atributo) para a página atual. fara uma request para o segmento atual desta page, assim no +page.ts ou +page.Server.ts ira receber esta request e manipula-la
    - quem lida com a request com method POST e uma action de servidor declarada na +page.server.ts rota que estamos
		- O <form> elemento possui um action atributo opcional, que é semelhante ao atributo <a> de um elemento href. aponte para uma action nomeada, a action default não precisar usar o action atributo do form
		- O action atributo pode ser qualquer URL — se a ação foi definida em outra página, você pode ter algo como /todos?/create. Como a ação está nesta página, podemos omitir completamente o nome do caminho, daí o ? caractere inicial.
		- aqui temos um form que sera manipulado por uma action nomeada /create que esta declarada em +page.server.ts
		- Os usuários são um grupo travesso, que enviará todos os tipos de dados sem sentido se tiver oportunidade. Para evitar que causem caos, é importante validar os dados do formulário.
		- o <form> funciona mesmo que o usuario não tenha javascript, quando o usuario possui javascript nesses casos podemos aprimorar progressivamente a experiencia, da mesmo forma que o sveltekit aprimora progressiamente <a> os elementos usando roteamento do lado do cliente.
			- usando a diretiva use:enhance no form elemento
			- usando a diretiva use, para usar uma function chamada enhance, essa action nos ajudara no aprimoramento progressivo a experiencia de usar o form com JS ativado, fazendo roteamento do lado do cliente
			- E isso é tudo que é preciso! Agora, quando o JavaScript estiver habilitado, use:enhance irá emular o comportamento nativo do navegador, exceto para recarregamentos de página inteira. Ele vai:
			- Sem argumento, use:enhance irá emular o comportamento nativo do navegador, apenas sem recarregar a página inteira. 
				- atualizar o form adereço
				- invalidar todos os dados em uma resposta bem-sucedida, fazendo com que load as funções sejam executadas novamente
				- navegue para a nova página em uma resposta de redirecionamento
				- renderizar a página de erro mais próxima se ocorrer um erro
			- Com o use:enhance, podemos ir além de apenas emular o comportamento nativo do navegador. Ao fornecer um retorno de chamada, podemos adicionar coisas como estados pendentes e UI otimista.
			- Para personalizar o comportamento, você pode fornecer um 
			SubmitFunction que seja executado imediatamente antes do envio do formulário e (opcionalmente) retorne um retorno de chamada que seja executado com oActionResult. Observe que se você retornar um retorno de chamada, o comportamento padrão mencionado acima não será acionado(comportamento nativo do navegador com os forms). Para recuperá-lo, ligue para update.
			- Você pode usar essas funções para mostrar e ocultar a interface de carregamento e assim por diante.
			- use:enhance é muito personalizável – você pode cancel()enviar envios, lidar com redirecionamentos, controlar se o formulário será redefinido e assim por diante. Veja os documentos para detalhes completos.
		-->
  <form method="post" action="?/create" use:enhance={() => {
		//esta function sera executada antes do envio do form
		
		//atribui um novo valor ao state
		//para podermos usar UI otimista
		creating = true;

		//retornamos um callback
		//que sera executado junto com o action deste form, este callback sera executado no action que esta declarado no +page.server.ts
		return async ({update}) => {
			// `update` é uma função que aciona a lógica padrão que seria acionada se esse retorno de chamada não fosse definido
			//aciona o comportamento padrão do navegador
			await update();
			//novo valor ao state
			creating = false;
		}
	}}>
    <label>
      add a todo:
      <input type="text" name="description" autocomplete="off" required value={form?.description ?? ''} disabled={creating}/>
    </label>
  </form>

  <ul class="todos">
    {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
		<!--
			- add transitions no li elemento ao ser criado e destruido no DOM
		-->
      <li in:fly={{y: 20}} out:slide>
				<!--
					- temos um form completo para cada task, com um oculto <input> que o identifique exclusivamente
					- este form possui uma action nomeada para manipular os dados
					- Com o use:enhance, podemos ir além de apenas emular o comportamento nativo do navegador. Ao fornecer um retorno de chamada, podemos adicionar coisas como estados pendentes e UI otimista .
					- use:enhanceé muito personalizável – você pode cancel()enviar envios, lidar com redirecionamentos, controlar se o formulário será redefinido e assim por diante. Veja os documentos para detalhes completos.
				-->
				<form method="POST" action="?/delete" use:enhance={() => {
					deleting = [...deleting, todo.id];
					return async ({ update }) => {
						await update();
						deleting = deleting.filter((id) => id !== todo.id);
					};
				}}>
					<input type="hidden" name="id" value={todo.id} />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete"/>
				</form>
      </li>
    {/each}
  </ul>

	<!--mostra mensagem enquanto salva um todo, aqui um UI otimista,  enquanto o todo esta sendo salvo mostra esta mensagem para  o user-->
	{#if creating}
		<span class="saving">saving...</span>
	{/if}
</div>


<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}

  input {
    color: black;
  }
</style>


