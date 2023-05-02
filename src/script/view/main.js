import '../component/movie-list.js';
import '../component/nav-bar.js';
import {DataSource, Main} from '../data/data-source.js';

const main = () => {
    const movieListElement = document.querySelector("movie-list");
    
    const display = async () => {
        const renderResult = results => {
            movieListElement.movies = results;
        };

        const fallbackResult = message => {
            movieListElement.renderError(message);
        };

        try {
            const result = await Main.fetchMovie();
            document.getElementById("text-title").innerHTML =  `<h1>Popular</h1>`;
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    display();
}

const search = () => {
    const searchElement = document.getElementById("search");
    const getForm = document.querySelector("form");
    const movieListElement = document.querySelector("movie-list");

    const renderResult = results => {
        movieListElement.movies = results;
        console.log(results);
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const searchButtonClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            document.getElementById("text-title").innerHTML =  `<h1>${searchElement.value}</h1>`;
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    getForm.addEventListener("submit", function(event) {
        event.preventDefault();
        searchButtonClicked();
    });
}

const responsive = () => {
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");

    cancelBtn.onclick = () => {
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
    }

    searchBtn.onclick = () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    }
}

export {main, search, responsive}