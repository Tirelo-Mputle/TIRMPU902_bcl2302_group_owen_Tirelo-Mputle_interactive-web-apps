const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line
//Made the divider longer
let longerDivider = divider;
longerDivider += "---";
//Used parseFloat to turn the string into numbers with decimals intact
//Used math.abs to turn it into an absolute value (non-negative value of x without regard to its sign)
const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance));
//Fixed owed to 2 decimals string
const owedFixedDecimals = owed.toFixed(2);
// Used substring method to break up owedFixedDecimals and insert " "
const owedWithGap = `R${owedFixedDecimals.substring(
  0,
  2
)} ${owedFixedDecimals.substring(2)}`;

/*function that turn negative values to absolute values and
fixes it to 2 decimal places*/
const fixedDecimals = (value) => {
  const fixedAndPositive = Math.abs(value).toFixed(2);
  return fixedAndPositive;
};

// Removed empty space in LeoSurnam and SarahName with trim method
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${`${fixedDecimals(
  leoBalance
)}`})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${`${fixedDecimals(
  sarahBalance
)}`})`;
const total = `Total amount owed: ${owedWithGap} `;
// Used escape characters to adjust the display
const result = `${leo}\n${sarah}\n\n\t${longerDivider}\n\t\t${total}\n\t${`${longerDivider}`}\n\n`;

console.log(result);
