import { useState, useEffect } from 'react'
import axios from 'axios'



const Weather = () => {

    const [data, setData] = useState(null)
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)



    const API_KEY = import.meta.env.VITE_API_KEY
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`


    const fetchWeather = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(URL)
            setData(response.data)
        }
        catch (err) {
            console.log(err)
            setError(err)
        }
    }

    // useEffect(() => {
    //     fetchWeather()
    // }, [])

    console.log(data)

    if(error) return <h1>{error.response.data.error.message}</h1>

    return (
        <>
            <form onSubmit={fetchWeather} action="">
                <input type="text" className='border-4' onChange={e => setSearch(e.target.value)} />
                <input type="submit" />
            </form>
            {
                data && (
                    <>
                        <h1>Hello from :  {data.location.name} </h1>
                        <p>The current weather condition is : {data.current.condition.text} with : {data.current.temp_c} degrees</p>
                    </>
                )
            }

        </>
    )

}


export default Weather