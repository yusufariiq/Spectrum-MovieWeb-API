const API_KEY = '162f0096690abfde68ea4d53bf3a61c1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`;
const searchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US`;

class DataSource {
    static searchMovie(keyword) {
        return fetch(`${searchURL}&query=${keyword}`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson);
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(fetchMovie());
            }
        })
    }
}

class Main {
    static fetchMovie() {
        return fetch(`${API_URL}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`movies not found`)
                }
            })
    }
}

export {DataSource, Main};