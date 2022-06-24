class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000)
    }
}
// creating sub-classes
/*
The extends keyword makes the methods of the HospitalEmployee class available inside the Nurse class. Extendes all methods from parent
class to child
The constructor, called when you create a new nurse object, accepts two arguments, name and certifications.
The super keyword calls the constructor of the parent class - name. In this case, super(name) passes the name argument of the 
nurse class to the constructor of the HospitalEmployee class. When the HospitalEmployee constructor runs, 
it sets this._name = name; for new nurse instances.
certifications is a new property that is unique to the nurse class, so we set it in the nurse constructor.
*/
    
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
// certifications is a specific parameter of the class nurse
        this._certifications = certifications;
        this._remainingVacationDays = 20;
    }

// methods
    get certifications() {
        return this._certifications
    }
    
    takeVacationsDays() {
        
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification)
        
    }
}

// Creating the sub-class doctor
class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name);
        this._insurance = insurance;
        this._remainingVacationDays = 20
    }
// define the methods
    takeVacationsDays() {
        
    }
}
    
// creating an instance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])
console.log(nurseOlynyk)
console.log(nurseOlynyk._certifications)

a = nurseOlynyk.takeVacationDays(5)
// adding _remainingVacationDays indicates a direct access of the property
// that is not best practice; the getter method provides access
console.log(nurseOlynyk.remainingVacationDays)

// Adding a certification
nurseOlynyk.addCertification('Genetics')
// the below is using the get method for certications
console.log(nurseOlynyk.certifications)

// Static Methods -> cannot be access from the instance of a class, only from the class itself
passwordN = HospitalEmployee.generatePassword()

console.log(passwordN)