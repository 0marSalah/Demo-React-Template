import { useState, useEffect } from 'react'

const useFetch = (url) => {
    // Hook Declaration
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
  
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
    .then((response) => {
      if (!response.ok) {
        throw Error("could not fetch the data for that recource!")
      }
      return response.json()
    })
    .then(data => {
      setData(data)
      setIsPending(false)
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsPending(false);
        setError(err.message);
      }
    })
  }, [url])

  return {error, isPending, data}
}

export default useFetch