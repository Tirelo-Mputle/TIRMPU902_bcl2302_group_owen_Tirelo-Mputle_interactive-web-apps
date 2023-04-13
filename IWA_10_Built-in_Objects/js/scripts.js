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

console.log(holidays[futureId] ?? `ID ${futureId} not created yet`);

const copied = { ...holidays };
//Created new Date object
const newDate = new Date(`25 December ${currentYear}`);
// hours and minutes are changed 00:00
newDate.setHours(0, 0);
const formatDate = `${newDate.getDate()}`;
const formatMonth = `${newDate.getMonth() + 1}`;
const formatYear = `${newDate.getFullYear()}`;

const newDateFormatted = `${formatDate.padStart(2, "0")}/${formatMonth.padStart(
  2,
  "0"
)}/${newDate.getFullYear()}`;

//check if newDate is smaller(earlier) than the holidays date.
const isEarlier = newDate < holidays[christmas].date;
console.log("New date is earlier:", isEarlier);

//if isEarlier is true
if (isEarlier) {
  //-change copied Christmas object name and date
  copied[christmas] = {
    ...copied[christmas],
    name: "X-mas",
    date: newDate,
  };

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

const holidayTimeStamps = [];
for (let i = 0; i < 9; i++) {
  const timeStamp = new Date(holidays[i].date).getTime();
  holidayTimeStamps.push(timeStamp);
}

const firstHolidayTimestamp = Math.min(...holidayTimeStamps);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const firstHolidayDay = `${firstHolidayDate.getDate()}`;
const firstHolidayMonth = `${firstHolidayDate.getMonth() + 1}`;
const firstHolidayYear = `${firstHolidayDate.getFullYear()}`;
console.log(
  `First holiday is: ${firstHolidayDay.padStart(
    2,
    0
  )}/${firstHolidayMonth.padStart(2, 0)}/${firstHolidayYear} `
);
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

const firstDay = firstHolidayTimestamp.getDate;
const firstMonth = firstHolidayTimestamp.getMonth;
const lastDay = lastHolidayTimestamp.getDate;
const lastMonth = lastHolidayTimestamp.getMonth;

const randomHoliday = holidays[Math.floor(Math.random() * 9)];
console.log(`Random holiday: ${randomHoliday.name}`);
