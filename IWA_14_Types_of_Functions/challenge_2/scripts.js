// script.js
//turn these function declations into arrow functions
//Placed the parameters in parenthesis
const add = (a, b) => a + b;

//changed the - to a *
const multiply = (a, b) => a * b;

//Used a function expression so I could use the "this" keyword
function internal() {
  // this is the object on which calcuted called
  //create the variables by spreading out the this object
  const { add, multiply, internal } = this;

  const added = add(internal.a, internal.b);
  const multiplied = multiply(added, internal.c);
  console.log(multiplied);
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
