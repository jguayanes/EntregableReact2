import { kelvinToCelcius } from "./kelvinToCelcius"



export const kelvinToFahrenheit = (kelvinDegrades) => {
    const celcius = kelvinToCelcius(kelvinDegrades)
    const fahrenheitConversion = 9/5;
    const freezingPoint = 32;

    return celcius * fahrenheitConversion + freezingPoint
}