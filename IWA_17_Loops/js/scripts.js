// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

/**
 *Creates an array with a length of the parameter "length".
 *The array will contain the parameter amount of values.
 * @param {number} length
 * @returns {[]}
 */
const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(i);
  }
  return result;
};

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const current1 = new Date();
//Set the first day of the month(1)
current1.setDate(1);
/**The day of the week on which the first day fall on */
const startDay = current1.getDay();

const daysInMonth = getDaysInMonth(current1);
//Depending on the number of days in the month,
//these are divide by 5 so that
//the calender will either have 6 or 5 weeks
const weeks = createArray(parseInt(daysInMonth / 5));
const days = createArray(7);

/**
 *Creates an array of objects that contain the data for each week.
 *The object contains 2 key. The first is the week number.
 *The second is an array of the days in that week.
 *Each day is an object containing a boolean of whether the day
 *is valid or not, the day (number) and the day  (name) of the week.
 * @returns {array}
 */
const createData = () => {
  let value = null;
  let result = [];
  let day = 0;
  //adds the week number to the value object
  for (const weekIndex of weeks) {
    value = {
      week: weekIndex + 1,
      days: [],
    };

    for (const dayIndex of days) {
      day = day + 1;
      /**
       * This allows the startDay to match up with the day on the
       *calendar on which it actually starts.
       */
      const currentDate = day - startDay;

      const isValid = currentDate > 0 && currentDate <= daysInMonth;
      //pushes an object containing if the day is a valid
      //calender day, it's day number and the day of the week
      value.days.push({
        isValid: isValid ? true : false,
        currentDate,
        dayOfTheWeek: daysOfTheWeek[Math.abs(dayIndex)],
      });
    }
    result.push(value);
  }

  return result;
};

/**
 *Creates a table data element that will hold the contents
 *for each cell in the calendat table body.
 * @param {string} classString - class name added to the cell
 * @param {string | number} value
 */
const addCell = (classString, value) => {
  const result = document.createElement("td");
  result.className = `${classString}`;
  result.innerHTML = `${value}`;
  return result;
};
/**
 *Creates a div with table row and cell data.
 * @param {array} data - contains week and days data
 * @returns {div.innerHTML}- the innerHtml of a div element containing
 * table rows populated with table data (cells)
 */
const createHtml = (data) => {
  let inner = "";
  const div = document.createElement("div");

  for (let item of data) {
    const tableRow = document.createElement("tr");
    const { week, days } = item;
    //Creates the sidebar week data
    inner = addCell(`table__cell table__cell_sidebar`, `Week ${week}`);
    tableRow.appendChild(inner);

    for (let day of days) {
      let classString = `table__cell`;
      const isWeekend =
        day.dayOfTheWeek === "Sat" || day.dayOfTheWeek === "Sun";

      const isAlternate = week % 2 === 0;
      const isToday = new Date().getDate() === day.currentDate;
      const isNotValidDay = day.isValid === false;

      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;

      inner = addCell(`${classString}`, isNotValidDay ? " " : day.currentDate);
      tableRow.appendChild(inner);
    }

    div.appendChild(tableRow);
  }

  return div.innerHTML;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
