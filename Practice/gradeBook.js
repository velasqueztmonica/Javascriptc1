//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

/*Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

const gradeBook = (num1, num2, num3) => {
    let averageGrade = (num1 + num2 + num3)/3;
    switch (true) {
        case (averageGrade >= 90 && averageGrade <= 100):
            console.log('A')
            break;
        
            case (averageGrade >= 80 && averageGrade < 90):
                console.log('B')
            break;
        
            case (averageGrade >= 70 && averageGrade < 80):
                console.log('C')
            break;
        
            case (averageGrade >= 60 && averageGrade < 70):
                console.log('D')
                break;
        
            case (averageGrade >= 0 && averageGrade < 60):
                console.log('F')
                break;
            
        
    }
}

gradeBook(50,50,50)