const button = document.getElementById("refresh")
const joke = document.getElementById("joke-text")
const url = "https://v2.jokeapi.dev/joke/Any"

let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => item["joke"])
    .then(item => {
        if(item!=undefined) {
            joke.innerText = item
        }
        console.log(item)
    })
}

// getJoke();

button.onclick = ()=>{
    getJoke();
}
