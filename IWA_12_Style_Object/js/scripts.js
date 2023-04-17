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
  const currentBookStatus = document.querySelector(`#book${i} .status`);
  const currentBookReserveButton = document.querySelector(`#book${i} .reserve`);
  const currentBookCheckoutButton = document.querySelector(
    `#book${i} .checkout`
  );
  const currentBookCheckInButton = document.querySelector(`#book${i} .checkin`);

  //get the status text
  const status = currentBookStatus.innerText;
  //get the matching status object
  const currentBookObject = STATUS_MAP[status];
  //set status text to the color in the status object
  currentBookStatus.style.color = currentBookObject.color;
  //check if the following status object properties are "true"/truthy
  currentBookObject.canReserve
    ? " " //if true, do nothing
    : //if false, set the disabled attribute on buttons
      //to true
      (currentBookReserveButton.disabled = true);
  currentBookObject.canCheckout
    ? " "
    : (currentBookCheckoutButton.disabled = true);
  currentBookObject.canCheckIn
    ? " "
    : (currentBookCheckInButton.disabled = true);
}
