export const getWeather = (coords, API) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${API}`)
        .then(res => res.json())
}

 