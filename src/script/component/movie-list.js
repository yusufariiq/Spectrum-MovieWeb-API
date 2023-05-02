import './movie-item.js';

class MovieList extends HTMLElement {
    
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML="";
        this._movies.forEach(movie => {
            const movieElement = document.createElement("movie-item");
            movieElement.movie = movie;
            this.appendChild(movieElement);
        })
    }

    renderError(message) {
        document.getElementById("text-title").innerHTML =  `
        <style>
            h1{
                margin-bottom: 10px;
            }
        </style>

        <h1>Your search did not match any movies</h1>
        `;
    }
}

customElements.define("movie-list", MovieList);