"use strict";

var tmdbKey = '937ca45daa06db824bd4ad27dec777fe';
var tmdbBaseUrl = 'https://api.themoviedb.org/3'; //const playBtn = Document.getElementById('playBtn');

var getGenres = function getGenres() {
  var genreRequestEndpoint, requestParams, urlToFetch, response, jsonResponse;
  return regeneratorRuntime.async(function getGenres$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          genreRequestEndpoint = '/genre/movie/list';
          requestParams = "?api_key=".concat(tmdbKey);
          urlToFetch = "".concat(tmdbBaseUrl).concat(genreRequestEndpoint).concat(requestParams);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(urlToFetch));

        case 6:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          jsonResponse = _context.sent;
          //renderResponse(jsonResponse)
          console.log(jsonResponse); //const {}

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 14]]);
};

getGenres();