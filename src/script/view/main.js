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

export {main, search}