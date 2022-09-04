"use strict";

// UI Variables 
var loanForm = document.querySelector('#loan-form'),
    amount = document.querySelector('#amount'),
    interest = document.querySelector('#interest'),
    years = document.querySelector('#years'),
    monthlyPayment = document.querySelector('#monthly-payment'),
    totalPayment = document.querySelector('#total-payment'),
    totalInterest = document.querySelector('#total-interest'),
    card = document.querySelector('.card'),
    heading = document.querySelector('.heading'),
    loader = document.querySelector('#loading'),
    results = document.querySelector('#results');

var calculateResults = function calculateResults() {
  var principal = parseFloat(amount.value);
  var calculatedInterest = parseFloat(interest.value) / 100 / 12;
  var calculatedPayments = parseFloat(years.value) * 12; // Compute monthly payment

  var k = Math.pow(1 + calculatedInterest, calculatedPayments);
  var monthly = principal * k * calculatedInterest / (k - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2); // show results 

    results.style.display = 'block'; // hide loader

    loader.style.display = 'none'; // clear the inputs after a successful operation

    amount.value = '';
    interest.value = '';
    years.value = '';
  } else {
    errorMessage('All fields are required!');
  }
};

var errorMessage = function errorMessage(message) {
  // Hide loader and results
  loader.style.display = 'none';
  results.style.display = 'none'; // Create a div element, add a class name and append a text node to the div

  var div = document.createElement('div');
  div.className = 'alert alert-danger';
  div.appendChild(document.createTextNode(message)); // insert error above heading

  card.insertBefore(div, heading); //Clear error message after 3 seconds 

  setTimeout(clearMessage, 3000);
};

var clearMessage = function clearMessage() {
  document.querySelector('.alert').remove();
};

var loadEvent = function loadEvent() {};

loanForm.addEventListener('submit', function (e) {
  // show loader 
  loader.style.display = 'block'; // Hide results

  results.style.display = 'none';
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});