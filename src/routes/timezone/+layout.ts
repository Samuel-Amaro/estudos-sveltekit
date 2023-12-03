/**
 * * CUSTOM DEPENDENCIES
 * 
 * Chamar fetch(url) dentro de uma função de carregamento(load) registra url como uma dependência. Às vezes não é apropriado usar fetch; nesse caso, você pode especificar uma dependência manualmente com a função depende(url).
 * 
 * Como qualquer string que comece com um padrão [a-z]+: é um URL válido, podemos criar chaves de invalidação personalizadas como data:now.
 * 
 * Atualize src/routes/+layout.js para retornar um valor diretamente em vez de fazer uma fetch chamada e adicione depends:
 * @param param0 
 * @returns 
 */

export async function load() {
	//const response = await fetch('/api/now');
	//const now = await response.json();
	//quando se usa invalidateAll() a dependens não e mais necessaria
	//depends("data:now")
	return {
		now: Date.now()
	};
}
