// scripts.js

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

/**athletes stores the data object containing the
 * athletes data
 */
const {
  //renamed data to athletes due to naming collision
  response: { data: athletes },
} = data;

/**Creates an Html element object with the athlete data
 * @param {object} - The specific athlete's code
 */
const createHtml = (athleteCode) => {
  //destructure variables from the athlete code object
  const { firstName, surname, id, races } = athletes[athleteCode];
  //create a fragment object
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.innerText = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");
  //destructure date and time from the last object in
  //the races array
  const { date, time } = races[races.length - 1];
  //create new date object
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = MONTHS[newDate.getMonth()];
  const year = newDate.getFullYear();

  //get the sum of the times in the times array
  const initialValue = 0;
  /**Sum of the times in the time array */
  const sumOfTimes = time.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  //Format the time to 12:09 structure
  const hours = Math.floor(sumOfTimes / 60);
  const minutes = sumOfTimes % 60;
  //list HTML content
  list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>

      <dt>Total Races</dt>
      <dd>${races.length}</dd>

      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>

      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, 0)} : ${minutes}</dd>
      `;

  fragment.appendChild(list);
  return fragment;
};
//select the athlete sections
const athlete1 = document.querySelector(`[data-athlete="NM372"]`);
const athlete2 = document.querySelector(`[data-athlete="SV782"]`);
/**The athletes codes array */
const athletesCodes = [...Object.keys(athletes)];
//append the fragment to the sections
athlete1.appendChild(createHtml(athletesCodes[0]));
athlete2.appendChild(createHtml(athletesCodes[1]));
