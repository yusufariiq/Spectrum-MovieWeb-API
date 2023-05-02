class MovieItem extends HTMLElement {

    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
        const getColor = (vote) => {
            if(vote >= 8){
                return 'green'
            }else if(vote >= 5){
                return "orange"
            }else{
                return 'red'
            }
        }

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/original${this._movie.poster_path}" alt="${this._movie.original_title}">
            <div class="movie-info">
                <h4>${this._movie.original_title}<p>(${this._movie.release_date ? this._movie.release_date.substring(0,4) : ""})</p></h4>
                <span class="${getColor(this._movie.vote_average)}">${this._movie.vote_average}</span>    
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${this._movie.overview} 
            </div>
            
        `;
        
        this.appendChild(movieElement);
    }
}

customElements.define("movie-item", MovieItem);