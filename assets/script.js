const apiKey = "99e151147e4dcc5b60bb5dd86ee0cf78"

const searchButton = document.querySelector(".search-button")

function searchPlace(cityName){
console.log(cityName)

}



searchButton.addEventListener("click", function(event){
event.preventDefault()
const cityName = document.querySelector("#input-box").value 
searchPlace(cityName)


})