const tmdbKey = '937ca45daa06db824bd4ad27dec777fe';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = Document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list'
    const requestParams = `?api_key=tmbdKey`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`

  try {
    const response = await fetch(urlToFetch); //waits to the promise to resolve

    if (response.ok) {
      const jsonResponse = await response.json();
      //renderResponse(jsonResponse)
      console.log(jsonResponse)
    }
  }
  catch (error) {
    console.log(error);

  }
};

const getMovies = () => {
    const selectedGenre = getSelectedGenre();
    

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;