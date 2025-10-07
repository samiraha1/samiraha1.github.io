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
    const movieList = document.getElementById("movieData");
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
    // const movieList = document.getElementById("movie");

    // movieData.forEach(m => {
    //     const div = document.createElement("div");
    //     div.classList.add(div);

    //     const title = document.createElement("h4");
    //     title.textContent = m.name;

    //     const p = document.createElement("p")
    //     p.innerText = m.director;
    //     p.innerText = m.releaseDate;
    //     p.innerText = m.rottenTomato;

    //     const img = document.createElement("img");
    //     img.src = p.img;
    //     img.alt = p.name;


    //     div.append(title, p, img);
    //     movieList.append(div);
    // })
    // let movies = await getMovie();

    // let movieSection = document.getElementById("movies");

    // movies.forEach((movie) => {
    //     movieSection.append(getMovieItem(movie))
    //     console.log(movie);
    // });
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
        releaseP.innerText = `Director: ${movie.releaseDate}`;
        div.appendChild(releaseP);
    }
    if(movie.director) {
        const rateP = document.createElement("p");
        rateP.classList.add("rotten");
        rateP.innerText = `Director: ${movie.rottenTomato}`;
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

    // let p = document.createElement("p")
    // p.innerText = movie.director;
    // p.innerText = movie.releaseDate;
    // p.innerText = movie.rottenTomato;
    // div.append(p);



    return div;
}

window.onload = async () => {
    const data = await getMovie();
    showMovie(data);
};