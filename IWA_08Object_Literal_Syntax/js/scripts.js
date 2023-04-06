const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

const leo = {
  name: leoName,
  balance: parseInt(leoBalance),
  accessId: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    "postal-code": leoPostal,
  },
};

const sarah = {
  name: `${sarahName.trim()} ${sarahSurname}`,
  balance: parseFloat(parseFloat(sarahBalance).toFixed(2)),
  accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  age: 62,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    "postal-code": sarahPostal,
  },
};

console.log(leo, leo.address["postal-code"]);
console.log(sarah, sarah.address["postal-code"]);

/*
1. What's wrong with the code.
- sarahsBalance is a constant variable and there's an attempt to
    reasign it.
- The objects are not being declared correctly.
-Sarah object's name values were misspelled.
-Nested objects were not assigned their values correctly.


2.How can I fix it?
- Add an assignment operator to the declaration
- The object contents need to be seperated by commas.
- Object properties should have their values assigned to them
    by :.
-access id property should either be a string "acces-id" or changed 
    to camel case accessId. This is the same with postal-code.
-accessId's value should be a string.

-Leo object
-name should just be leoName (surname already included)

-Sarah object 
-missing closing }
-name value had to be placed in a string literal and sarahName had 
    to be have empty spaces removed.

-The console.log statements
-address is not a string. A dot notation should be used to access it.
-The "postal-code" property should have quotations around it. It is
    a string.
*/
