"use strict";

var tmdbKey = '937ca45daa06db824bd4ad27dec777fe';
var tmdbBaseUrl = 'https://api.themoviedb.org/3';
var playBtn = Document.getElementById('playBtn'); // Get Movie Genres

var getGenres = function getGenres() {
  var genreRequestEndpoint, requestParams, urlToFetch, response, jsonResponse, genres;
  return regeneratorRuntime.async(function getGenres$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          genreRequestEndpoint = '/genre/movie/list';
          requestParams = "?api_key=".concat(tmdbKey);
          urlToFetch = "".concat(tmdbBaseUrl).concat(genreRequestEndpoint).concat(requestParams);
          console.log(urlToFetch);
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 7:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 14;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          jsonResponse = _context.sent;
          //console.log(jsonResponse);  check jsonResponse
          genres = jsonResponse.genres; //console.log(genres)  test

          return _context.abrupt("return", genres);

        case 14:
          ;
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);

        case 20:
          ;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 17]]);
}; // Get Movie Pages


var getMovies = function getMovies() {
  var selectedGenre, discoverMovieEndpoint, randomPage, requestParams, urlToFetch, response, jsonResponse, movies;
  return regeneratorRuntime.async(function getMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          selectedGenre = getSelectedGenre();
          discoverMovieEndpoint = '/discover/movie'; // 500 is the max allowable page search parameter on tmdb

          randomPage = Math.floor(Math.random() * 500);
          requestParams = "?api_key=".concat(tmdbKey, "&with_genres=").concat(selectedGenre, "&page=").concat(randomPage);
          urlToFetch = "".concat(tmdbBaseUrl).concat(discoverMovieEndpoint).concat(requestParams);
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 8:
          response = _context2.sent;

          if (!response.ok) {
            _context2.next = 15;
            break;
          }

          _context2.next = 12;
          return regeneratorRuntime.awrap(response.json());

        case 12:
          jsonResponse = _context2.sent;
          //console.log(jsonResponse);  
          movies = jsonResponse.results; //console.log(movies);   

          return _context2.abrupt("return", movies);

        case 15:
          ;
          _context2.next = 21;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](5);
          console.log(_context2.t0);

        case 21:
          ;

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 18]]);
};

var getMovieInfo = function getMovieInfo(movie) {
  var movieId, movieEndpoint, requestParams, urlToFetch, response, jsonResponse, movieInfo;
  return regeneratorRuntime.async(function getMovieInfo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          movieId = movie.id;
          movieEndpoint = "/movie/".concat(movieId);
          requestParams = "?api_key=".concat(tmdbKey);
          urlToFetch = "".concat(tmdbBaseUrl).concat(movieEndpoint).concat(requestParams);
          _context3.prev = 4;
          _context3.next = 7;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 7:
          response = _context3.sent;

          if (!response.ok) {
            _context3.next = 14;
            break;
          }

          _context3.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          jsonResponse = _context3.sent;
          movieInfo = jsonResponse; //console.log(movieInfo) 

          return _context3.abrupt("return", movieInfo);

        case 14:
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](4);
          console.log(_context3.t0);

        case 19:
          ;

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 16]]);
}; // Get Movie Cast


var getCast = function getCast(movie) {
  var movieId, movieEndpoint, requestParams, urlToFetch, response, jsonResponse, castInfo, castName, i;
  return regeneratorRuntime.async(function getCast$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          movieId = movie.id;
          movieEndpoint = "/movie/".concat(movieId, "/credits");
          requestParams = "?api_key=".concat(tmdbKey);
          urlToFetch = "".concat(tmdbBaseUrl).concat(movieEndpoint).concat(requestParams);
          _context4.prev = 4;
          _context4.next = 7;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 7:
          response = _context4.sent;

          if (!response.ok) {
            _context4.next = 17;
            break;
          }

          _context4.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          jsonResponse = _context4.sent;
          castInfo = jsonResponse.cast;
          castName = '<strong>Starring:</strong> ';

          for (i = 0; i < castInfo.length; i++) {
            castName += castInfo[i].name + ', ';
          }

          ; //console.log(castName);

          return _context4.abrupt("return", castName);

        case 17:
          ;
          _context4.next = 23;
          break;

        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](4);
          console.log(_context4.t0);

        case 23:
          ;

        case 24:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[4, 20]]);
}; // Get Movie Ratings


var getRating = function getRating(movie) {
  var movieId, movieEndpoint, requestParams, urlToFetch, response, jsonResponse;
  return regeneratorRuntime.async(function getRating$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          movieId = movie.id;
          movieEndpoint = "/movie/".concat(movieId);
          requestParams = "?api_key=".concat(tmdbKey, "&language=en-US&append_to_response=release_dates");
          urlToFetch = "".concat(tmdbBaseUrl).concat(movieEndpoint).concat(requestParams);
          _context5.prev = 4;
          _context5.next = 7;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 7:
          response = _context5.sent;

          if (!response.ok) {
            _context5.next = 19;
            break;
          }

          _context5.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          jsonResponse = _context5.sent;
          rating = jsonResponse.release_dates.results[0].release_dates[0].certification;

          if (!(rating === '')) {
            _context5.next = 17;
            break;
          }

          return _context5.abrupt("return", 'Not Rated');

        case 17:
          return _context5.abrupt("return", "Rated: ".concat(rating));

        case 18:
          ;

        case 19:
          ;
          _context5.next = 25;
          break;

        case 22:
          _context5.prev = 22;
          _context5.t0 = _context5["catch"](4);
          console.log(_context5.t0);

        case 25:
          ;

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[4, 22]]);
}; // Add movie to liked movie list(but not displayed)


var addToLikedMovies = function addToLikedMovies(movieInfo) {
  var likedMovies = '';
  likedMovies += movieInfo + ', '; //console.log(likedMovies)

  displayLikedMovies(likedMovies);
}; // Gets a list of movies and ultimately displays the info of a random movie from the list


var showRandomMovie = function showRandomMovie() {
  var movieInfo, movies, randomMovie, info, cast, rating;
  return regeneratorRuntime.async(function showRandomMovie$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          movieInfo = document.getElementById('movieInfo');

          if (movieInfo.childNodes.length > 0) {
            clearCurrentMovie();
          }

          ;
          _context6.next = 5;
          return regeneratorRuntime.awrap(getMovies());

        case 5:
          movies = _context6.sent;
          _context6.next = 8;
          return regeneratorRuntime.awrap(getRandomMovie(movies));

        case 8:
          randomMovie = _context6.sent;
          _context6.next = 11;
          return regeneratorRuntime.awrap(getMovieInfo(randomMovie));

        case 11:
          info = _context6.sent;
          _context6.next = 14;
          return regeneratorRuntime.awrap(getCast(randomMovie));

        case 14:
          cast = _context6.sent;
          _context6.next = 17;
          return regeneratorRuntime.awrap(getRating(randomMovie));

        case 17:
          rating = _context6.sent;
          console.log(rating);
          displayMovie(info, cast, rating);

        case 20:
        case "end":
          return _context6.stop();
      }
    }
  });
}; //getMovies(); 


getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;