import { useState } from "react"

type Props ={
    setCity: (city: string)=> void
    setTemp:(temp:number)=>void
    setWeather:(weather:string)=>void
}

const SearchCity = ({setCity, setTemp, setWeather}: Props)=>{

    const [input, setInput]= useState("")

    const [error, setError]= useState("")

    const API_KEY="20f32cefae37e44c886b3e88e2568b42"

    const getWeather = async()=>{
        if(!input) return;
        try{
            setError("");
            const res= await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
            )

            if(!res.ok){
                throw new Error("City not found")
            }
            const data = await res.json()

            //Send data to App
            setCity(data.name)
            setTemp(data.main.temp)
            setWeather(data.weather[0].main)
        }catch(error){
            console.error(error);
            setError("City not found")
        }
    }

    const handleSubmit=(event: React.SubmitEvent)=>{
        event.preventDefault()
        getWeather()
    }
    return (
        <div className='flex rounded-2xl flex-row w-full'>
            <form
            className="flex rounded-2xl flex-row w-full"
            onSubmit={handleSubmit}>
                <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Search your city"
                name="search"
                className="border-2 rounded-md bg-white w-[70%]"/>
                <button
                className="border-2 rounded-md bg-amber-500 w-[30%]"
                >
                    Get
                </button>
            </form>
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

    )
}

export default SearchCity