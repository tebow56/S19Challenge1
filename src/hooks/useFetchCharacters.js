import {useEffect, useState} from 'react';

const useFetchCharacters = (url) => {
  const [data, setData] = useState(null)

    useEffect(() => {
      const fetchPokemon = async ()=> {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
      }}
      fetchPokemon()
    },[url])
  return { data };
}

export default useFetchCharacters;