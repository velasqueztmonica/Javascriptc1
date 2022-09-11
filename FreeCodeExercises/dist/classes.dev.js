"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Only change code below this line
var Thermostat =
/*#__PURE__*/
function () {
  function Thermostat(fahrenheit) {
    _classCallCheck(this, Thermostat);

    this.fahrenheit = fahrenheit;
  }

  _createClass(Thermostat, [{
    key: "temperature",
    get: function get() {
      return 5 / 9 * (this.fahrenheit - 32);
    },
    set: function set(celsius) {
      this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }]);

  return Thermostat;
}(); // Only change code above this line


var thermos = new Thermostat(76); // Setting in Fahrenheit scale

var temp = thermos.temperature; // 24.44 in Celsius

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius