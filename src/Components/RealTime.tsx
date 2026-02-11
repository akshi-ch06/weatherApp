import { useEffect, useState } from "react"

const RealTime =()=>{

    const formatTime = () =>{
        return new Date().toLocaleTimeString('en-US',{
            hour:'numeric',
            minute:'2-digit',
            hour12: true
        })
    }

    const [time, setTime]= useState<string>(formatTime())

    useEffect(()=>{
        const timerId = window.setInterval(()=>{
            setTime(
                formatTime()
            )
        }, 1000)

        return() => window.clearInterval(timerId)
    }, [])


    return(
        <div className='h-15'>
            <p className="text-white text-5xl ">
                {time}
            </p>
        </div>
    )
}

export default RealTime