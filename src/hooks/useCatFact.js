import { useState, useEffect } from 'react'
import { newCatFact } from '../services/catFact'

export function useCatFact() {
	const [fact, setFact] = useState()

	function refreshFact() {
		newCatFact().then(setFact) // realiza un fetch, y retorna una promesa con la respuesta(fact), por eso debemos resolverlo con un .then
	}

	useEffect(refreshFact, []) // solo se ejecutará por primera vez

	return { fact, refreshFact }
}
