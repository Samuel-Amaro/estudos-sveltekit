/*export async function load() {
	return new Promise((fulfil) => {
		setTimeout(fulfil, 1000);
	});
}*/

export async function load() {
	return {
		message: 'this data came from the server',
		cool: true
	};
}