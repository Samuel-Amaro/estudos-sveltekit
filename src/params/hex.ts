/**
 * * PARAM MATCHERS
 * 
 * Para evitar que o roteador corresponda a uma entrada inválida, você pode especificar um matcher . Por exemplo, você pode querer que uma rota /colors/[value] corresponda a valores hexadecimais /colors/ff3e00, mas não a cores nomeadas /colors/octarine, ou qualquer outra entrada arbitrária.
 * @param value 
 * @returns 
 */

//aqui exportamos uma match function que verifica a correspondencia de um value, se corresponde a um formato desejado
export function match(value) {
	return /^[0-9a-f]{6}$/.test(value);
}