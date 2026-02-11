//import { useEffect, useState } from "react"
type Props={
    city:string
}

const RealTimeCity=({city}:Props)=>{

    return(
        <div className='text-white'>
            <p className="text-white-2xl h-15 text-5xl">
                {city || "Dehradun"}
            </p>
        </div>
    )
}

export default RealTimeCity