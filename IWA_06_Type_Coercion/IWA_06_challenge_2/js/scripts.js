const rent = 400;
const tax = "12%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
const hourOfDayString = hourOfDay.toString() + "0";
const minuteOfDayString = minuteOfDay.toString() + "0";
const taxAsNumber = parseInt(tax.substring(0, 2));
const taxAsDecimal = taxAsNumber / 100;
if (
  hourOfDay !== undefined &&
  minuteOfDay !== undefined &&
  hourOfDayString === "00" &&
  minuteOfDayString === "00"
) {
  const startingAfterTax = salary - salary * taxAsDecimal;
  const balance = startingAfterTax - (food + transport + rent);

  //create a global balance variable
  window.balance = balance;
}

console.log("R" + balance.toFixed(2));
