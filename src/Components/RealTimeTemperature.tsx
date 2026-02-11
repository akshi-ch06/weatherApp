type Props={
    temp:number|null
}

const RealTimeTemperature=({temp}:Props)=>{
    return(
        <div className="text-white text-3xl">
            {temp !== null ? `${temp}°C` : "Temperature"}
        </div>
    )
}

export default RealTimeTemperature