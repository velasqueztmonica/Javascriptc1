/* PROBLEM DESCRIPTION
The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/


// Function about the sleep hours of an individual per week
const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8;
      case 'Tuesday':
        return 8;
      case 'Wednesday':
        return 8;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 8;
      case 'Saturday':
        return 8;
      case 'Sunday':
        return 8;
    }
  }
//   Verification of function
  console.log(getSleepHours ('Wednesday'))
  
// Function that returns the total amount of hours per week
  const getActualSleepHours = () => {
    return (getSleepHours ('Monday') 
    + getSleepHours ('Tuesday') 
    + getSleepHours ('Wednesday') 
    + getSleepHours ('Thursday')
    + getSleepHours ('Friday') 
    + getSleepHours ('Saturday') 
    + getSleepHours ('Sunday'))
  };
// verification
  console.log(getActualSleepHours())
  
// Function calculating the ideal hours per week times the 7 days of the week
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  console.log(getIdealSleepHours(8))

//   calculate sleep debt depending on whether is equal, less or more
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
  
    if (actualSleepHours === idealSleepHours) {
      console.log ('Perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
      console.log ('You have slept ' + (actualSleepHours - idealSleepHours) + 
        ' hour(s) more than you needed this week. Be more active.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log ('You got ' + (idealSleepHours - actualSleepHours) + 
        ' hour(s) less sleep than you needed this week. Get some rest.')
    } else {
      console.log ('Error')
    }
  }
  // a console.log is not needed as the function itself has outputs
  calculateSleepDebt()