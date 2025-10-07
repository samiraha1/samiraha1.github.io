const getMovie = async () => {
    const url = "https://samiraha1.github.io/csce242/projects/part6/film.json"

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovie = async (movieData) => {
    const movieList = document.getElementById("movie");
    if (!movieList) {
        console.error("no element with id 'movie' dound in the DOM");
        return;
    }

    if (!Array.isArray(movieData) || movieData.LENGTH === 0) {
        movieList.innerText = "no movies to show.";
        return;
    }

    movieList.INNERhtml = "";

    movieData.forEach((movie) => {
        movieList.appendChild(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");

    const h3 = document.createElement("h3")
    h3.innerText = movie.name;
    div.append(h3);

    if(movie.director) {
        const directorP = document.createElement("p");
        directorP.classList.add("director");
        directorP.innerText = `Director: ${movie.director}`;
        div.appendChild(directorP);
    }
    if(movie.releaseDate) {
        const releaseP = document.createElement("p");
        releaseP.classList.add("release");
        releaseP.innerText = `Release Date: ${movie.releaseDate}`;
        div.appendChild(releaseP);
    }
    if(movie.director) {
        const rateP = document.createElement("p");
        rateP.classList.add("rotten");
        rateP.innerText = `${movie.rottenTomato}`;
        div.appendChild(rateP);
    }
    if(movie.img || movie.image) {
        const img = document.createElement("img");
        img.src = movie.image || movie.img;
        img.alt = movie.name || "movie image";
        img.classList.add("movie-img");
        div.appendChild(img)
    }
    return div;
}

window.onload = async () => {
    const data = await getMovie();
    showMovie(data);
};