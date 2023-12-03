//Tome cuidado para não introduzir cachoeiras durante o uso await parent(). Se você puder usar fetch outros dados que não dependam dos dados pai, faça isso primeiro.
//aqui vamos acessar dados para a propria load function acessar dados de seus pais, fr load function superiores a essa
//isso pode ser feito com await parent()
export async function load({parent}) {
  //aqui vamos obter dados de duas load function pais desta
  //que se encontra em /layout.server.ts em root, e a irmã /sum/+layout.ts que se encontra neste diretorio
  //somando as duas para retornar
	const {a, b} = await parent();
  return {c: a + b};
}