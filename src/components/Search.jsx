import { kelvinToCelcius } from "../utils/kelvinToCelcius"
import { kelvinToFahrenheit } from "../utils/kelvinToFahrenheit"
import axios from "axios"
import { useState } from "react"

const Search = ({weatherInfo,citys, setCity}) => {
    const [iscelcius, setIscelcius] = useState(true)
    const [citys, setCity] = useState()


    const handleSubmit = (e) =>{
        e.preventDefault()
        const cityName = e.target.weatherInfo.value

        const apiKey = '408953d32ef358bb43dbca22013c66d3'
        const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`


        axios.get(url1)        
            .then(({data}) => setCity(data))
            .catch((err) => console.log(err))
        }

    const handleTemperature = () =>{
        setIscelcius(!iscelcius)
    }
    console.log(citys);
  return (
    <main>
        <form className="flex rounded-md overflow-hidden max-w-max mx-auto mt-8" onSubmit={handleSubmit}>
            <input id="weatherInfo" autoComplete="off" placeholder="Type a City..." className="text-black p-1" type="text" />
            <button className="bg-white/60 px-4">Search</button>
        </form>

        {/* <section key={citys?.id}>
        <section className="flex gap-5 flex-col mt-9">
            <h2 className="text-black text-center text-4xl">{citys?.sys.country}, {citys?.name}</h2>

            <section className="flex flex-col items-center justify-center gap-8 sm:flex sm:flex-row" >
                //superior
                <section className="bg-white/60 p-2 py-4 rounded-2xl w-[449px] ">
                    <h4 className="text-center text-2xl capitalize">{citys?.weather[0].description}</h4>
                    <div className="flex place-content-around  items-center">
                    <span className="text-[45px]">{ iscelcius 
                    ? kelvinToCelcius(citys?.main.temp)
                    : kelvinToFahrenheit(citys?.main.temp).toFixed()
                }° {iscelcius ? "C" : "F" }</span>
                    <div className="">
                        <img src={`https://openweathermap.org/img/wn/${citys?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                    </div>
                </section>
                //inferior
                <section className="bg-white/60 p-2 py-4 rounded-2xl flex justify-center w-[449px] gap-5 sm:flex-col sm:w-[128px] sm:h-[265px]">
                    <article className="flex justify-center gap-3">
                        <div>
                            <img src="/viento.png" alt="" />
                        </div>
                        <span >
                            {citys?.wind.speed} m/s
                        </span>
                    </article>

                    <article className="flex justify-center gap-8
                    ">
                        <div>
                            <img src="/humedad.png" alt="" />
                        </div>
                        <span>
                            {citys?.main.humidity} %
                        </span>
                    </article>

                    <article className="flex justify-center gap-1">
                        <div>
                            <img src="/presion.png" alt="" />
                        </div>
                        <span>
                            {citys?.main.pressure} hPa
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
        </section>
        
         */}
    </main>
  )
}

export default Search