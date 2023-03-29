const DATE = 2050;
const STATUS = "parent";
let count = 0;

if (DATE === 2050) {
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");

  const fourthMonth = "April";
  console.log(fourthMonth, "Family Day");
  console.log(fourthMonth, "Freedom Day");
  count += 4;
  console.log(count);

  if (STATUS === "student") {
    console.log("June", "Youth Day");
    count += 1;
    console.log(count);
  }

  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  const twelfthMonth = "December";
  console.log(twelfthMonth, "Day of Reconciliation");
  count += 3;

  if (STATUS === "parent") {
    console.log(twelfthMonth, "Christmas Day");
    count += 1;
  }

  console.log(twelfthMonth, "Day of Goodwill");
  count += 1;
  console.log(count);
}

console.log("Your status is:", STATUS);
console.log("The year is:", DATE);
console.log("The total holidays is:", count);
