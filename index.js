let search = document.querySelector(".search")
const input_value = document.querySelector("input")
const yourlocation = document.querySelector(".location")
let icon = document.querySelector(".icon")
let temperature = document.querySelector(".temperature")
let weather_temperature = document.querySelector(".weather_temperature")
let weather_status = document.querySelector(".weather_status")




const alert = document.querySelector(".alert")

yourlocation.addEventListener("click", (e) => {
    navigator.geolocation.getCurrentPosition((location) => {
        let latitude = location.coords.latitude
        let longitude = location.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2c6823df05f8bb675e7f4e01e7870081`)
            .then(res => res.json())
            .then(json => {
                creatingdata(json)
            })
            .catch((error) => console.log(error))

    })

})


search.addEventListener("click", () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&appid=2c6823df05f8bb675e7f4e01e7870081`)
        .then(data => data.json())
        .then(json => {
            if (json.name == undefined) {
                temperature.innerText = ''
                weather_temperature.innerHTML = ''
                weather_status.innerText = ''


                alert.style.display = "block"

            }
            else {
                creatingdata(json)

            }


        })
        .catch((error) => console.log(error))

})



function creatingdata(json) {
    icon.setAttribute("Src",`https://api.openweathermap.org/img/w/${json.weather[0].icon}.png`)
    temperature.innerText = json.name

    weather_temperature.innerHTML = `${Math.floor(json.main.temp - 273)}<span>${"&#176"}</span><span>${"C"}</span>`;
    // console.log(weather_temperature);

    weather_status.innerText = json.weather[0].main
    // console.log(weather_status);
 

}