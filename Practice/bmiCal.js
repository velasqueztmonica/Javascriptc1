function bmi(weight, height) {
  
    var bimCal = weight / (height ** 2)
    
    switch (true) {
        case (bimCal <= 18.5):
        return "Underweight"
        break;
        
         case (bimCal <= 25):
        return "Normal"
        break;
        
         case (bimCal <= 30):
        return "Overweight"
        break;
        
         case (bimCal > 30):
        return "Obese"
        break;
    }
    
}
    
console.log(bmi(80, 1.80))