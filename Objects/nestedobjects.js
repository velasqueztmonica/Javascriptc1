let spaceship2 = {
    passengers: [
      {name: 'Space Dog'}
    ],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship2.crew.captain['favorite foods'][0]
let firstPassenger = spaceship2.passengers[0]
  
console.log(capFave, firstPassenger)

let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
    
  }
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  }
  
  greenEnergy(spaceship1);
  
  remotelyDisable(spaceship1);
  
  console.log(spaceship1)