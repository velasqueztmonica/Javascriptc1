"use strict";

//API GET Request to fetch all loan accounts
var apiURL = "";
var apiQuery = "";
var idQuery = "";
var endPoint = "".concat(apiURL).concat(apiQuery, "/").concat(idQuery); //Headers

var headersList = {
  Accept: "application/vnd.mambu.v2+json",
  "content=type": "application/json",
  apiKey: ""
}; //Async Function to fetch API

var getLoanAccountbyID = function getLoanAccountbyID() {
  var response, jsonResponse, id, taxRate, interestSettings, loanAmount, _balances, scheduleSettings, topHalf, daysLoan, result, apr2r;

  return regeneratorRuntime.async(function getLoanAccountbyID$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(endpoint, {
            method: "GET",
            headers: headersList
          }));

        case 3:
          response = _context.sent;

          if (!response.ok) {
            _context.next = 21;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(response.jason());

        case 7:
          jsonResponse = _context.sent;
          console.log(jsonResponse); // Using destructuring to select those parameters required

          id = jsonResponse.id, taxRate = jsonResponse.taxRate, interestSettings = jsonResponse.interestSettings, loanAmount = jsonResponse.loanAmount, _balances = jsonResponse.balances, scheduleSettings = jsonResponse.scheduleSettings; //verifying destructuring

          console.log(id);
          console.log(_balances.principalBalance);
          console.log(_balances.feesDue);
          console.log(_balances.interestBalance);
          console.log(scheduleSettings.repaymentInstalments);
          console.log(interestSettings.interestRate); //Calculate APR

          topHalf = (_balances.feesDue + _balances.interestBalance) / _balances.principalBalancel;
          daysLoan = scheduleSettings.repaymentInstalments * 30; //Printing Results

          console.log("APR Calculation is");
          result = topHalf / daysLoan * 365 * 100;
          console.log(result);

        case 21:
          //Another way
          apr2r = (balances.feesDue + balances.interestBalance) / balances.principalBalance / (4 * 365) * (365 * 100);
          console.log(apr2r);
          _context.next = 28;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 25]]);
};

console.log("Loan Account with ID $(idQuery)");
console.log(getLoanAccountbyID());