const CAT_ENDPOINT_FACT = `https://catfact.ninja/fact`

export function newCatFact() {
	return fetch(CAT_ENDPOINT_FACT)
		.then((res) => res.json()) // convertimos a un objeto JS y retorna una promesa
		.then((data) => {
			const { fact } = data
			return fact
		})
}
