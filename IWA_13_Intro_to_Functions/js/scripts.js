let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

//Correct the assignments of the fuctions to the variables
/**
 * Checks if calcuated is a strings and turns it into a
 * number if it is a string. It changes the value of calculated.
 * It keeps it as a number if it is not a string (is a number)
 */
const logCalc = () => {
  //turned the assignment operator into a strict
  //equality operator
  const isString = typeof calculated === "string";
  //use a ternary opetator to check isString
  //if it is positive turn calculated into a number
  //if false, I'm assuming calculated is a number, return calculated
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  //assign calculatedAsNumber to calculated
  //increase calculated by 1 every time logCalc runs which
  //will be every time calcUser runs
  calculated = calculatedAsNumber;
  calculated += 1;
};

const calcUser = () => {
  //to run function use open and closed parentheses () after
  //the function name
  logCalc();
  //The first 2 if statement conditionals are the same
  //Decided to combine the code blocks
  if (calculated > 2) {
    user = "John";
    state = "requesting";
  }
  if (calculated > 3) state = "idle";
  //   console.log("calc user", calculated, user, state);
};

const checkUser = () => {
  if (user === "John" && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
  //   console.log("checkUser", calculated, user, state);
};

// Only allowed to change code above

checkUser(); //calculated = 1; user = null
calcUser(); //calculated = 2 user = null //

checkUser(); //calculated  = 2, user = null
calcUser(); //calculated = 3, The first is statement is met
//user = John, state = requesting
//The second if statement is not met 3 is not greater than 3

checkUser(); //calculated  = 3, user = John, statement = "requesting"
//The if statement is met and the console.log is run
calcUser(); //calculate =4, second if statement is now met
//state = idle

checkUser(); //state = idle, user = 4, user = "John"
//if statement is not met
calcUser(); //state = idle, user = 5, user = "John"

checkUser(); //state = idle, user = 5, user = "John"
//if statement is not met
calcUser(); //state = idle, user = 6, user = "John"
