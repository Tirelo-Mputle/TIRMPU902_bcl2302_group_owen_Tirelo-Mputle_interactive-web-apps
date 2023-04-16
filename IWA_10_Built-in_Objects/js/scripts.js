const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

//check if there is an object in the holidays
//object with the 9/futureId
console.log(holidays[futureId] ?? `ID ${futureId} not created yet`);

/**length of holidays object
 *@type {number} -length of holidays object
 */

let holidaysLength = Object.keys(holidays).length;

/**
 * Creates a copy of the `holidays` object using the spread operator.
 * @type {Object}
 */
const copied = { ...holidays };

//Created new Date object
const newDate = new Date(`25 December ${currentYear}`);
// hours and minutes are set to 00:00
newDate.setHours(0, 0);
//get the date, month and year from the newDate object
//the getDate, getMonth and getFullYear methods
const formatDate = `${newDate.getDate()}`;
const formatMonth = `${newDate.getMonth() + 1}`; // +1 because it starts counting at 0
const formatYear = `${newDate.getFullYear()}`;

//results in a date string with this format 01/01/2002 using
// the formatDate, month and year variables
// padStart method is used to add a "0" at the start of
//the string
const newDateFormatted = `${formatDate.padStart(2, "0")}/${formatMonth.padStart(
  2,
  "0"
)}/${newDate.getFullYear()}`;

/**
 *check if newDate is smaller (earlier) than the holidays date.
 * @return {boolean}
 */
const isEarlier = newDate < holidays[christmas].date;
console.log("New date is earlier:", isEarlier);

/**
 * If isEarlier is true, change the name and date of the
 * christmas object in the copied object to
 * "X-mas" and `newDate`.
 */

if (isEarlier) {
  copied[christmas] = {
    //spread the christmas object of the copied object
    ...copied[christmas],
    //replace the name and date
    name: "X-mas",
    date: newDate,
  };

  /**
   * check if the id,name and date of the copied christmas
   * object are the same as the holidays christmas object
   * if true (they are the same) console.log eg: `Id change:false`
   * if false (they are different) console.log
   * eg: `Name change: (The changed key value)`
   */
  // check ID change:
  console.log(
    "ID change:",
    holidays[christmas].id === copied[christmas].id ? false : true
  );
  //check name change
  console.log(
    "Name change:",
    holidays[christmas].name === copied[christmas].name
      ? false
      : `${copied[christmas].name}`
  );
  //check date
  console.log(
    "Date change:",
    holidays[christmas].date === copied[christmas].date
      ? false
      : `${newDateFormatted}`
  );
}

/**
 * empy holidayTimeStamps array
 *@type {Array} - empty array
 */
const holidayTimeStamps = [];

/**
 *loop through holidays object to get the unix times of each
 *object in the holidays object
 */

for (let i = 0; i < holidaysLength; i++) {
  const timeStamp = new Date(holidays[i].date).getTime();
  //push the unix times into the empty array
  holidayTimeStamps.push(timeStamp);
}

/**
 * the smallest holidayTimeStamps unix time using the
 * Math.min method
 * spread the holidayTimeStamps array in the method
 *@type {number} - smallest holidayTimeStamps unix time
 */
const firstHolidayTimestamp = Math.min(...holidayTimeStamps);

/**new date object using the firstHolidayTimestamp
 * @type {date}
 */
const firstHolidayDate = new Date(firstHolidayTimestamp);

/** date value string of firstHolidayDate */
const firstHolidayDay = `${firstHolidayDate.getDate()}`;
/** month value string of firstHolidayDate
 * Added 1 because the months starts counting from 0*/
const firstHolidayMonth = `${firstHolidayDate.getMonth() + 1}`;
/** year value string of firstHolidayDate */
const firstHolidayYear = `${firstHolidayDate.getFullYear()}`;

//add padStart method to add a 0 to the strings
console.log(
  `First holiday is: ${firstHolidayDay.padStart(
    2,
    0
  )}/${firstHolidayMonth.padStart(2, 0)}/${firstHolidayYear} `
);

//Follow the same steps as above but using Math.max
//to get the largest holidays unix time.
const lastHolidayTimestamp = Math.max(...holidayTimeStamps);

const lastHolidayDate = new Date(lastHolidayTimestamp);
const lastHolidayDay = `${lastHolidayDate.getDate()}`;
const lastHolidayMonth = `${lastHolidayDate.getMonth() + 1}`;
const lastHolidayYear = `${lastHolidayDate.getFullYear()}`;
console.log(
  `Last holiday is: ${lastHolidayDay.padStart(
    2,
    0
  )}/${lastHolidayMonth.padStart(2, 0)}/${lastHolidayYear} `
);

/**
 *random holidays object
 * generate a random number,
 * round it down and multiply by holidaysLength
 * @type {object} -random holidays object
 * */

const randomHoliday = holidays[Math.floor(Math.random() * holidaysLength)];
console.log(`Random holiday: ${randomHoliday.name}`);
