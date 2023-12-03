//Observe que uma função universal load pode obter dados de uma função de servidor load pai . O inverso não é verdadeiro – uma função de carregamento do servidor só pode obter dados pai de outra função de carregamento do servidor.
//aqui vamos acessar dados para a propria load function acessar dados de seus pais, load function superiores a essa
//isso pode ser feito com await parent()
export async function load({parent}) {
  //aqui acessamos os dados retonrados da load function pai que se encontra em /+layout.server.ts
  const {a} = await parent();
	return {b: a + 1};
}