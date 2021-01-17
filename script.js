const callAJoke = new Audio();
callAJoke.src = "bellpluslaugh.mp3";

const JokeButton = document.querySelector('.joke');

const fetchData = (endpoint) => {
    try {
        const API_URL = `https://icanhazdadjoke.com${endpoint}`;
        const options = {
            method: "GET",
            headers: { "Accept": "application/json" } 
        };
        fetch(API_URL, options)
            .then(response => response.json())
            .then(data => {
                let jokeResults = document.querySelector('.jokeText');
                jokeResults.innerHTML = data.joke;
            })

    } catch (error) {
        console.log(error);
    }
}

const fetchJoke = async() => {
    let getJoke = await fetchData('');
    return getJoke;
}
fetchJoke();

JokeButton.addEventListener('click', () => {
    fetchJoke();
});
