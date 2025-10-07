const getMovie = async () => {
    fetch("film.json");

    try {
        const response = await fetch("film.json");
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovie = async (movieData) => {
    const movieList = document.getElementById("movie");

    movieData.forEach(m => {
        const div = document.createElement("div");
        div.classList.add(div);

        const title = document.createElement("h4");
        title.textContent = m.name;

        const p = document.createElement("p")
        p.innerText = m.director;
        p.innerText = m.releaseDate;
        p.innerText = m.rottenTomato;

        const img = document.createElement("img");
        img.src = p.img;
        img.alt = p.name;


        div.append(title, p, img);
        movieList.append(div);
    })
    // let movies = await getMovie();

    // let movieSection = document.getElementById("movies");

    // movies.forEach(movie => {
    //     console.log(movie);
    // });
};

// const getMovieItem = (movie) => {
//     let div = document.createElement("div");

//     let h3 = document.createElement("h3")
//     h3.innerText = movie.name;
//     div.append(h3);

//     let p = document.createElement("p")
//     p.innerText = movie.director;
//     p.innerText = movie.releaseDate;
//     p.innerText = movie.rottenTomato;
//     div.append(p);



//     return div;
// }

window.onload = async () => {
    const data = await getMovie();
    showMovie(data);
};