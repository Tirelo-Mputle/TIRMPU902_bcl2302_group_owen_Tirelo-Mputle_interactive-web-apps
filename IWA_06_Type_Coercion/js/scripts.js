const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

const primaryValid =
  typeof parseInt(primaryPhone) === "number" && !isNaN(parseInt(primaryPhone));
const secondaryValid =
  typeof parseInt(secondaryPhone) === "number" &&
  !isNaN(parseInt(secondaryPhone));

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
