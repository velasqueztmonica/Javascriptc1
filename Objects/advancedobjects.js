const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType); //The this keyword references the calling object which provides access to the calling object’s properties
    }
  };
  goat.diet(); 
  // Output will be "ReferenceError: dietType is not defined if not using the 'this' word"

const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() { //method
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  console.log(robot.greeting())
  
const massProdRobot = (model, mobile) => {
    return {
      model,
      mobile,
      greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  /*One common convention is to 
  place an underscore _ before the name of a property to mean that the property should not be altered
  */

  //Exercise 1
  const robotM = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robotM._energyLevel = 'high';
  robotM.recharge()

  //Exercise 2
  const chargingStation = {
    _name: 'Electrons-R-Us', //not intended to be directly manipulated
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    /*
    Along with getter methods, we can also create setter methods which reassign values of existing properties within an object
    */
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
      },
    
    //Getters are methods that get and return the internal properties of an object
    /* Getters can perform an action on the data when getting a property.
    Getters can return different values using conditionals.
    In a getter, we can access the properties of the calling object using this.
    The functionality of our code is easier for other developers to understand.
    */
    get robotCapacity() {
      return this._robotCapacity;
    }
  }

chargingStation.robotCapacity = 150;
console.log(chargingStation.robotCapacity)