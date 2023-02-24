import { useState, useEffect } from 'react'

export function useCatImg({ fact }) {
  const [catimg, setCatimg] = useState()

  // https://cataas.com/cat/gif/says/hola?json=true

  useEffect(() => {
    if (!fact) return // valida si no existe un fact, que no haga nada

    fetch(`https://cataas.com/cat/gif?json=true`)
      .then((res) => res.json())
      .then((json) => setCatimg(json.url))
  }, [fact])
  return { catimg }
}
