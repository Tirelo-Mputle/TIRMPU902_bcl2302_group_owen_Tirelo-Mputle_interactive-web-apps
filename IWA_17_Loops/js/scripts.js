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

/**Creates an array with a set length.
 * The function will contain the index keys as values.
 */
const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(i);
  }
  return result;
};

const createData = () => {
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();

  const startDayName = daysOfTheWeek[startDay];

  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(6);

  const days = createArray(7);
  let value = null;
  let result = [];
  let day = 0;
  for (let weekIndex of weeks) {
    value = {
      week: weekIndex + 1,
      days: [],
    };

    for (let [dayIndex, dayz] of days.entries()) {
      const dayName = dayIndex;
      day = day + 1;

      let currentDate = day - startDay;

      let isValid = currentDate > 0;
      if (isValid && currentDate <= daysInMonth) {
        value.days.push([
          isValid,
          currentDate,
          daysOfTheWeek[Math.abs(dayName)],
        ]);
      } else {
        value.days.push([false, currentDate, daysOfTheWeek[Math.abs(dayName)]]);
      }
    }
    result.push(value);
  }

  return result;
};

// ${existing ? value : ""}
// const addCell = (existing, classString, value) => {
const addCell = (classString, value) => {
  const result = document.createElement("td");
  result.className = `${classString}`;
  result.innerHTML = `${value}`;
  return result;
};

const createHtml = (data) => {
  let inner = "";
  const fragment = document.createElement("div");
  let result = [];

  for (let item of data) {
    const sideCell = document.createElement("tr");
    const { week, days } = item;
    inner = addCell(`table__cell table__cell_sidebar`, `Week ${week}`);
    sideCell.appendChild(inner);

    for (let day of days) {
      let classString = `table__cell`;
      const isWeekend = day[2] === "Sat" || day[2] === "Sun";

      const isAlternate = week % 2 === 0;
      const isToday = new Date().getDate() === day[1];
      const isNotValidDay = day[1] <= 0 || day[1] > 30;

      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;

      inner = addCell(`${classString}`, isNotValidDay ? " " : day[1]);
      sideCell.appendChild(inner);
    }

    fragment.appendChild(sideCell);
  }

  return fragment.innerHTML;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
