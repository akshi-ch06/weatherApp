import './App.css'
import { useState } from "react";
import RealTimeCity from './Components/RealTimeCity'
import RealTimeDate from './Components/RealTimeDate'
import CloudImage from './Components/CloudImage'
import RealTime from './Components/RealTime'
import WeatherType from './Components/WeatherType'
import SearchCity from './Components/SearchCity'
import RealTimeTemperature from './Components/RealTimeTemperature'

function App() {

  const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<number | null>(null);
  const [weather, setWeather] = useState<string>("");

  return (
    <div>
      <div className='bg-blue-400 h-150 w-80 rounded-md'>
        <div className='flex flex-col justify-center gap-5 pt-20 pb-20 '>
          {/* Always same */}
          <RealTimeDate/>
          <RealTime/>
          {/* Dynamic */}
          <RealTimeCity city={city}/>
          <CloudImage/>
          <RealTimeTemperature temp={temp}/>
          <WeatherType weather={weather}/>
          <SearchCity
          setCity={setCity}
          setTemp={setTemp}
          setWeather={setWeather}
          />
        </div>
      </div>
    </div>
  )
}

export default App
