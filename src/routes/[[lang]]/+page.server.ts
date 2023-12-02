const greetings: {
  [index: string]: string
} = {
	en: 'hello!',
	de: 'hallo!',
	fr: 'bonjour!',
  pt: 'óla!'
};

//function que carrega dados para src/routes/[[lang]]/+page.svelte
//obtem a localidade e carrega uma saudação para a localidade especifica no parametro dinamico opcional de rota, ou carrega a localidade padrão
export function load({ params }) {
	//obtem a localidade e retorna um greeting text
	//especifica a localidade padrão
	return {
		greeting: greetings[params.lang ?? "pt"]
	};
}
