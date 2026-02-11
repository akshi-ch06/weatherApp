type Props={
    weather: string
}

const WeatherType = ({weather}:Props)=>{
    return (
        <div className="text-white text-xl">
            {weather || "WeatherType"}
        </div>
    )
}

export default WeatherType