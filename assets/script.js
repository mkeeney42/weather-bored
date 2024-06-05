const apiKey = "99e151147e4dcc5b60bb5dd86ee0cf78"

const searchButton = document.querySelector(".search-button")

function searchPlace(cityName){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    ).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        const weatherContainer = document.querySelector(".today-weather")
        const todaysWeather = `
        <div>
        <h3>city: ${data.name}</h3>
        <p>Temp: ${data.main.temp}</p>
        <p>Humidity: ${data.main.humidity}</p> 
        <p>Wind Speed: ${data.wind.speed}</p>
        </div>
        
        `;

        weatherContainer.innerHTML = todaysWeather
    })

}



searchButton.addEventListener("click", function(event){
event.preventDefault()
const cityName = document.querySelector("#input-box").value 
searchPlace(cityName)


})
 
