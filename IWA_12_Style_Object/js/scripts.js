// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};
// Edit below line
const numberOfBooks = 3;
//create a loop that starts at 1, ends when i is lower than
//or equals to 3(the number of books) and increase i
//by 1 each time it loops
for (let i = 1; i <= numberOfBooks; i++) {
  //get the specific elements for each book
  //this is based on the number of i
  const bookStatus = document.querySelector(`#book${i} .status`);
  const reserveButton = document.querySelector(`#book${i} .reserve`);
  const checkoutButton = document.querySelector(`#book${i} .checkout`);
  const checkInButton = document.querySelector(`#book${i} .checkin`);

  //get the status text
  const statusText = bookStatus.innerText;

  //get the matching status object
  const bookObject = STATUS_MAP[statusText];
  //set status text to the color in the status object
  bookStatus.style.color = bookObject.color;
  //check if the following status object properties are "true"/truthy
  bookObject.canReserve
    ? " " //if true, do nothing
    : //if false, set the disabled attribute on buttons
      //to true
      (reserveButton.disabled = true);
  bookObject.canCheckout ? " " : (checkoutButton.disabled = true);
  bookObject.canCheckIn ? " " : (checkInButton.disabled = true);
}
