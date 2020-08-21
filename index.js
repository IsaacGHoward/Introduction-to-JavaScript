/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 21;
if(votingAge > 18)
    console.log("Task 1A : " + true);




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variable1 = 10;
if(votingAge > variable1)
    variable1 = votingAge - 18;
console.log("Task 1B : " + variable1);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log("Task 1C : Convert '1999' to integer : " + Number("1999"));



//Task d: Write a function to multiply a*b 

function mult(num1, num2){
    return(num1*num2);
}
console.log("Task 1D : Multiply 3 * 5 : " + mult(3,5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function toDogYears(humanYears){
    return(humanYears*7);
}
console.log("Task 2  : 5 Human Years To Dog Years : " + toDogYears(5));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age){
    if(age >= 1){
        if(weight <= 5)
            return(.05 * weight);
        else if(weight <= 10)
            return(.04 * weight);
        else if(weight <= 15)
            return(.03 * weight);
        else
            return(.02 * weight);
    }
    else{
        let months = age * 12;
        if(months >= 2 || months <= 4)
            return(.1 * weight);
        else if(months <= 7)
            return(.05 * weight);
        else if(months <= 12){
            return(.04 * weight);
        }
    }
}
console.log("Task 3  : " + dogFeeder(15,1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function convertRPS(convertThis){
    if(convertThis === 0)
        return("Rock");
    else if(convertThis === 1)
        return("Paper");
    else if(convertThis === 2)
        return("Scissors");
    else if(convertThis === "Rock")
        return(0);
    else if(convertThis === "Paper")
        return(1);
    else if(convertThis === "Scissors")
        return(2);
}
function RPS(playerChoice){
    var computerChoice = Math.floor(Math.random() * 3);
    playerChoice = convertRPS(playerChoice);
    if(computerChoice - playerChoice === 1 || computerChoice - playerChoice === -2)
        return(`You Lost ; ${convertRPS(computerChoice)} beats ${convertRPS(playerChoice)}`);
    else if(computerChoice - playerChoice === 0)
        return(`You Tied ; ${convertRPS(playerChoice)} and ${convertRPS(computerChoice)} are the same`);
    else 
        return(`You Win ; ${convertRPS(playerChoice)} beats ${convertRPS(computerChoice)}`);
}
console.log("Task 4  : " + RPS("Rock"));

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kilometersToMiles(km){
    return(km * .621371)
}
console.log("Task 5A : " + kilometersToMiles(10));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCentimeters(feet){
    return(feet * 30.48);
}
console.log("Task 5B : " + feetToCentimeters(20));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





