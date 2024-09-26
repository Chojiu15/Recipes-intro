



const Weather = () => {

    const API_KEY = import.meta.env.VITE_API_KEY
    console.log(API_KEY)
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London`

    return (
        <>
            <h1>Hello climat</h1>
        </>
    )

}


export default Weather