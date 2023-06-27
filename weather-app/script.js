const key = "196632352a9359cd06693576a82d02b7";
let city = "london";
let url = `http://api.weatherstack.com/current?access_key=${key}&query=`;

const City = document.getElementById("city")
const icon = document.getElementById("icon")
const city_name = document.getElementById("city-name")
const temperature = document.getElementById("temperature")
const submit = document.getElementById("submit")
const pressure = document.getElementById("pressure")
const precip = document.getElementById("precip")
const humidity = document.getElementById("humidity")
const description = document.getElementById("description")
const cloudcover = document.getElementById("cloudcover")

let getInfo = ()=>{
    if(City == ""){
        // console.log(city)
        console.error("Enter a city");
    }
    else{
        // city = cityname.value
        // console.log(city)
        // console.log(url+city)
        fetch(url+city.replace(/ /g, "%20"))
        .then(data => data.json())
        .then(item => item.current)
        .then(item=>{
            console.log(item)
            icon.src = item.weather_icons[0]
            city_name.innerText = city
            temperature.innerText = item.temperature
            humidity.innerText = item.humidity
            cloudcover.innerText = item.cloudcover
            description.innerText = item.weather_descriptions[0]
            precip.innerText = item.precip
            pressure.innerText = item.pressure
        })
    }
}

getInfo()
submit.onclick = () =>{
    getInfo()
}

City.addEventListener("keyup", (e)=>{
    // console.log(e)
    // console.log(cityname.value)
    city = City.value;
})