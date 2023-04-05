const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

// const primaryValid =
//   typeof parseInt(primaryPhone) === "number" && !isNaN(parseInt(primaryPhone));
// const secondaryValid =
//   typeof parseInt(secondaryPhone) === "number" &&
//   !isNaN(parseInt(secondaryPhone));

// Refactored code
const primaryValid = !isNaN(parseInt(primaryPhone));
const secondaryValid = !isNaN(parseInt(secondaryPhone));

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
/* 
- ParseInt return a number or NaN.
- Check if that value is NOT NaN
-primaryPhone is NaN. The check if for is
it is NOT Nan so it will return false.
-secondayPhone is a number so the check will
return true because it it NOT NaN

*/
