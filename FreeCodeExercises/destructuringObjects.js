const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

  
  // Only change code above this line

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({ max, min }) => (max + min) / 2.0; 
  // Only change code above this line

  //Above we are passing the const stats when calling the function.

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);