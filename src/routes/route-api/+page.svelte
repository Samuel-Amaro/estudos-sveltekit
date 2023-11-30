<script lang="ts">
	export let data;
	let number: number;

	//busca dados de uma /roll rota API quando você clica no botão.
	//a rota de api esta definida em /roll/+server.ts
	async function roll() {
		const response = await fetch('/api/roll');
		number = await response.json();
	}
</script>

<div class="centered">
	<h1>todos</h1>

	<label>
		add a todo:
		<input
			type="text"
			autocomplete="off"
			on:keydown={async (e) => {
				//Você também pode adicionar manipuladores que alteram dados, como POST. Na maioria dos casos, você deve usar ações de formulário — você acabará escrevendo menos código e ele funcionará sem JavaScript, tornando-o mais resiliente.
				//vamos postar alguns dados no servidor por meio desse manipulador de evento
				if (e.key === 'Enter') {
					const input = e.currentTarget;
					const description = input.value;

					//realiza uma request para /todo rota API para que dados sejam postados no server
					//os dados vão como json
					//a rota de api esta definida em /todo/+server.ts
					//Aqui, estamos postando algum JSON na /todo rota da API — usando um userid dos cookies do usuário
					const response = await fetch('/api/todo', {
						method: 'POST',
						body: JSON.stringify({ description }),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					//usamos isto para atualizar a page
					//e recebendo id como resposta a tarefa recém-criada.
					//podemos add ao nosso banco de dados fake para que a page possa ser atualizada
					//Você só deve sofrer mutação data de forma que obtenha o mesmo resultado recarregando a página.
					const { id } = await response.json();

					data.todos = [
						...data.todos,
						{
							id,
							description,
							done: false
						}
					];

					input.value = '';
				}
			}}
		/>
	</label>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<label>
					<input
						type="checkbox"
						checked={todo.done}
						on:change={async (e) => {
							const done = e.currentTarget.checked;

							//realiza uma request para /todo rota API para que dados sejam postados no server, para que possa alterar o done de uma todo
							//os dados vão como json
							//a rota de api esta definida em /todo/[id]/+server.ts
							//Aqui, estamos postando algum JSON na /todo rota da API — usando um done value
							await fetch(`/api/todo/${todo.id}`, {
								method: 'PUT',
								body: JSON.stringify({ done }),
								headers: {
									'Content-Type': 'application/json'
								}
							});
						}}
					/>
					<span>{todo.description}</span>
					<button
						aria-label="Mark as complete"
						on:click={async (e) => {
							//realiza uma request para /todo/[id] rota API para que possa deletar uma todo com determinado id
							await fetch(`/api/todo/${todo.id}`, {
								method: 'DELETE'
							});

							//para atualizar a page
							data.todos = data.todos.filter((t) => t !== todo);
						}}
					/>
				</label>
			</li>
		{/each}
	</ul>

	<!--
    - quando clicamos neste button ira buscar dados de um rota de API /roll
  -->
	<button on:click={roll} class="buttonRoll">Roll the dice</button>

	{#if number !== undefined}
		<p>You rolled a {number}</p>
	{/if}
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		display: flex;
		width: 100%;
	}

	input[type='text'] {
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

	.buttonRoll {
		background: none;
		background-color: var(--bg-1);
		border: 1px solid black;
		height: auto;
		color: black;
		opacity: 1;
	}

	input {
		color: black;
	}
</style>
