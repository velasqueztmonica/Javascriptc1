//Step 1 - 
//The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.
//Within the menu object, create a _meal property with a value of an empty string (''). 
//This will eventually hold the name of the meal.

//Step 2 -
//Next, add a _price property with a value of 0. 
//This will eventually hold the price of the meal, and should also not be altered directly.

const menu = {
    _meal: '',
    _price: 0,

// Methods
    
//Getters
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's meal is ${this._meal} for ${this._price}`
        } else {
            return `Meal or price not set correctly`
        }
    },
    
//Setters
/*
To safely reassign the two menu properties, we can add setters that type check the values being assigned.
Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. 
Leave the function body empty for now.
*/
    
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal;
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price;
        }
    }
};


/* Step 3
We know properties that begin with _ should not be directly manipulated. 
But just to validate this knowledge, let’s test it out!
Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.
Then, below the new assignments, console.log() the menu object to see how not type checking these values could cause 
confusion for a website visitor!
*/

menu._meal = 'Pizza';
menu._price = 8;
console.log(menu);

console.log(menu.todaysSpecial)

