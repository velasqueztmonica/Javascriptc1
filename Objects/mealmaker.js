// Step 1 - Create an empty menu object

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    // Get methods - step 4
    get appetizers() {
        return this._courses.appetizers;
    },
    
    get mains() {
        return this._courses.mains;
    },
    
    get desserts() {
        return this._courses.desserts;
    },
    // Step 5 and step 6
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    //  Set methods - step 4
    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
        
    //  methods - step 8
        
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish)
    },

    // methods - step 9

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price + mains.price + desserts.price;
            return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, and the total price is ${totalPrice}`;
    }
 };

//  Adding dishes - step 12
menu.addDishToCourse('appetizers', 'salad', 4.00)
//     menu.addDishToCourse('appetizers', 'wings', 4.00)
//     menu.addDishToCourse('appetizers', 'sfries', 4.00)

menu.addDishToCourse('mains', 'steak', 11.00)
//     menu.addDishToCourse('mains', 'chicken', 12.00)
//     menu.addDishToCourse('mains', 'turkey', 14.00)

menu.addDishToCourse('desserts', 'ice cream', 3.00)
//     menu.addDishToCourse('desserts', 'kitkat', 2.00)
//     menu.addDishToCourse('desserts', 'panacotta', 4.00)

const meal = menu.generateRandomMeal();
console.log(meal)
console.log(menu._courses)