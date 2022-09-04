"use strict";

// information to reach API
var apiKey = 'a2a421e1a58d4817bf8615ae97321159';
var url = 'https://api.rebrandly.com/v1/links'; // Some page elements

var inputField = document.querySelector('#input');
var shortenButton = document.querySelector('#shorten');
var responseField = document.querySelector('#responseField'); // Asynchronous functions

var shortenUrl = function shortenUrl() {
  var urlToShorten, data, response, jsonResponse;
  return regeneratorRuntime.async(function shortenUrl$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          urlToShorten = inputField.value;
          data = JSON.stringify({
            destination: urlToShorten
          });
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'POST',
            body: data,
            headers: {
              'Content-type': 'application/json',
              'apikey': apiKey
            }
          }));

        case 5:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          jsonResponse = _context.sent;
          renderResponse(jsonResponse);

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 13]]);
}; // Clear page and call Asynchronous functions


var displayShortUrl = function displayShortUrl(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);