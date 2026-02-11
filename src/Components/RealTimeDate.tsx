import { useState, useEffect } from "react";

const RealTimeDate = ()=>{
    const[date, setDate]=useState<string>(" ")

    useEffect(() => {

        const formatDate = () => {
        setDate(new Date().toLocaleDateString('en-US',{
            month:'long',
            day:'numeric',
            year:'numeric'
        }));
    }

    formatDate()
    const timerId = window.setInterval(formatDate, 1000)

    return()=> window.clearInterval(timerId);
}, []);
    return(
        <div className='text-gray-300 h-10'>
            <p className="text-2xl">
                {date}
            </p>
        </div>
    )
}

export default RealTimeDate;