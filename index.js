let search = document.querySelector(".search")
const input_value = document.querySelector("input")
const display = document.querySelector(".display")
const alert = document.querySelector(".alert")



// console.log(input);
window.addEventListener("DOMContentLoaded", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=2c6823df05f8bb675e7f4e01e7870081`)
        .then(data => data.json())
        .then(json => {
            // console.log(json);
            let temperature = document.createElement("h2")
            temperature.innerText = json.name
            // console.log(temperature);

            let weather_temperature = document.createElement("h3")
            weather_temperature.innerHTML = `${Math.floor(json.main.temp - 273)}<span>${"&#176"}</span><span>${"C"}</span>`;
            console.log(weather_temperature);

            let weather_status = document.createElement("p")
            weather_status.innerText = json.weather[0].main
            // console.log(weather_status);
            display.appendChild(temperature)
            display.appendChild(weather_temperature)
            display.appendChild(weather_status)


            search.addEventListener("click", () => {
             
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_value.value}&appid=2c6823df05f8bb675e7f4e01e7870081`)
                    .then(data => data.json())
                    .then(json => {
                        if (json.name ==undefined) {
                            temperature.innerText =''
                            weather_temperature.innerHTML=''
                            weather_status.innerText=''

                        
                         alert.style.display="block"
                            
                        }
                        else{
                            alert.style.display="none"

                            alert.innerText=''
                            temperature.innerText = json.name
                            // console.log(temperature);
    
                            weather_temperature.innerHTML = `${Math.floor(json.main.temp - 273)}<span>${"&#176"}</span><span>${"C"}</span>`;
                            console.log(weather_temperature);
    
                            weather_status.innerText = json.weather[0].main
                            // console.log(weather_status);
                            
                            display.appendChild(temperature)
                            display.appendChild(weather_temperature)
                            display.appendChild(weather_status)
                        }
                      
                            
    
                        
                       


                    })
            })



        })
})
