//orders
const order1dl = document.querySelector("[data-key=order1]");
const order2dl = document.querySelector("[data-key=order2]");
const order3dl = document.querySelector("[data-key=order3]");

//order object
const orders = {
  1: order1dl,
  2: order2dl,
  3: order3dl,
};
//Loop through all the order and create the order
// specific dom elements
for (let i = 1; i <= 3; i++) {
  //create dom elements based on the order number
  let biscuits = document.querySelector(
    `[data-key=order${i}] .biscuits .count`
  );
  let donuts = document.querySelector(`[data-key=order${i}] .donuts .count`);
  let pancakes = document.querySelector(
    `[data-key=order${i}] .pancakes .count`
  );
  let status = document.querySelector(`[data-key=order${i}] .status dd`);
  //use order number to get the order dl element
  let currentOrder = orders[i];

  //change the innerText of the dom elements based on
  //the dataset in the current order dl
  biscuits.innerText = currentOrder.dataset.biscuits;
  donuts.innerText = currentOrder.dataset.donuts;
  pancakes.innerText = currentOrder.dataset.pancakes;
  status.innerText =
    currentOrder.dataset.delivered === "true" ? "Delivered" : "Pending";
}
