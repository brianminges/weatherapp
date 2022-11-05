import React, {useState, useEffect} from "react"
import { useGeolocated } from "react-geolocated"
import { getWeather } from "./WeatherManager";
import "./weather.css"

export const Weather = () => {
    const [weather, setWeather] = useState({})
    const API = process.env.REACT_APP_WEATHER_KEY
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    useEffect(() => {
            if (coords) {
              getWeather(coords, API).then(setWeather)
            }
            console.log('weather', weather)
          }, [coords])

    const [description, setDescription] = useState("")

    // useEffect(() => {
    //     weather.weather.map(w => (
    //         setDescription(w.main)
    //     ))  
    // }, [weather])

return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ? (
    
    <React.Fragment>
    <div className="content"> 
    <h1>Today in {weather?.name}</h1>
    <p>Current: {Math.round(weather?.main?.temp)}&#176;F</p>
    {/* <p>{weather.weather[0].main}</p> */}
 
    {/* <ul>{weather.weather.map(w => (
        <ul>{w.main}</ul>
    ))} </ul> */}

    <p>High/low: {Math.round(weather?.main?.temp_max)}&#176;F / {Math.round(weather?.main?.temp_min)}&#176;F</p>
    <p>Humidity: {weather?.main?.humidity}%</p>
    <p>Feels like: {Math.round(weather?.main?.feels_like)}&#176;F</p>
    <p>Wind: {Math.round(weather?.wind?.speed)} mph</p>

    </div>
    </React.Fragment>
    ) : (
        <div>Getting the location data&hellip; </div>
    );

}