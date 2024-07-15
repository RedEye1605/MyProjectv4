import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data,setData] =useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchdata = async ()=>{
            setLoading(true)
            try{
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch (error){
                setError(error)
                setLoading(false)
            }
        }
        fetchdata()
    }, [url])
  return{ loading, error, data }
}

export default useFetch
