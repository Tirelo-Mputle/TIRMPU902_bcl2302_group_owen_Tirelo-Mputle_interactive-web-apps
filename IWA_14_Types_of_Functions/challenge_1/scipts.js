//used the const keyword to name the variables
const firstName = "John";
const age = 35;
const hobby = "Coding";

//Added the parameter between the parethesis of the
//logTwice function
/**
 * Console logs the parameter twice *
 * @param parameter -type is not defined
 */
const logTwice = (parameter) => {
  //fixed the syntax of the console.log
  console.log(parameter);
  console.log(parameter);
};

/**
 * Uses logTwice function to print out a string
 */
// hobby function has the same name as the hobby
//variable with the value of "Coding" (naming conflict)
//Change the name of the function and changed it to an
//arrow function
const myHobby = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
};
//Call the myHobby function and not the hobby string as it
//is not a fuction
myHobby();
