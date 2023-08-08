import { useState } from "react"
import { kelvinToCelcius } from "../utils/kelvinToCelcius"
import { kelvinToFahrenheit } from "../utils/kelvinToFahrenheit"


const Weather = ({weatherInfo}) => {

    const [iscelcius, setIscelcius] = useState(true)

    const handleTemperature = () =>{
        setIscelcius(!iscelcius)
    }

    return (
        <section className="flex gap-5 flex-col mt-9">
            <h2 className="text-black text-center text-4xl">{weatherInfo?.sys.country}, {weatherInfo?.name}</h2>

            <section className="flex flex-col items-center justify-center gap-8 sm:flex sm:flex-row" >
                {/* Sección superios */}
                <section className="bg-white/60 p-2 py-4 rounded-2xl w-[449px] ">
                    <h4 className="text-center text-2xl capitalize">{weatherInfo?.weather[0].description}</h4>
                    <div className="flex place-content-around  items-center">
                    <span className="text-[45px]">{ iscelcius 
                    ? kelvinToCelcius(weatherInfo?.main.temp)
                    : kelvinToFahrenheit(weatherInfo?.main.temp).toFixed()
                }° {iscelcius ? "C" : "F" }</span>
                    <div className="">
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                    </div>
                </section>
                {/* Seccion inferior */}
                <section className="bg-white/60 p-2 py-4 rounded-2xl flex justify-center w-[449px] gap-5 sm:flex-col sm:w-[128px] sm:h-[265px]">
                    <article className="flex justify-center gap-3">
                        <div>
                            <img src="/viento.png" alt="" />
                        </div>
                        <span >
                            {weatherInfo?.wind.speed} m/s
                        </span>
                    </article>

                    <article className="flex justify-center gap-8
                    ">
                        <div>
                            <img src="/humedad.png" alt="" />
                        </div>
                        <span>
                            {weatherInfo?.main.humidity} %
                        </span>
                    </article>

                    <article className="flex justify-center gap-1">
                        <div>
                            <img src="/presion.png" alt="" />
                        </div>
                        <span>
                            {weatherInfo?.main.pressure} hPa
                        </span>
                    </article>
                </section>
            </section>
            <section className="flex justify-center">
                <button onClick={handleTemperature} className="bg-white/60 p-3 w-[140px] rounded-2xl h-10 flex items-center justify-center text-sky-600">
                    Change to {!iscelcius ? "C" : "F" }°
                </button>
            </section>
            
        </section>
    )
}

export default Weather