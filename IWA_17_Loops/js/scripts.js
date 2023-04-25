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
const newDate = new Date();

const createArray = (length) => {
  const result = [];
  result.length = length;
  return result;
};

const createData = () => {
  const current = newDate;
  current.setDate(1);
  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5);
  const days = createArray(7);
  let value = null;
  const result = [];
  //for each week(5) give it a value array with an object containing
  //week number
  for (let [weekIndex, weekValue] of weeks.entries()) {
    value = {
      week: weekIndex + 1,
      days: [],
    };
    // console.log(weekIndex, weekValue, value);
    for (let [dayIndex, dayValue] of days.entries()) {
      const day = dayIndex - startDay;
      const isValid = startDay > 0 && startDay <= daysInMonth;
      console.log(dayIndex, day, value);

      value.days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : null,
      });
    }
  }
};
createData();
const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (week, days in data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')

        for (dayOfWeek, value in days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
