const numberOfOrders = 3;
/**
 *Loop through all the orders and create the individual
 *orders based dataset information in the description list
 */

for (let i = 1; i <= numberOfOrders; i++) {
  //create dom elements based on the order number
  const biscuits = document.querySelector(
    `[data-key=order${i}] .biscuits .count`
  );
  const donuts = document.querySelector(`[data-key=order${i}] .donuts .count`);
  const pancakes = document.querySelector(
    `[data-key=order${i}] .pancakes .count`
  );
  const status = document.querySelector(`[data-key=order${i}] .status dd`);

  /**the order description list element*/
  const currentOrder = document.querySelector(`[data-key=order${i}]`);

  //change the innerText of the dom elements based on
  //the dataset in the current order description list

  biscuits.innerText = currentOrder.dataset.biscuits;
  donuts.innerText = currentOrder.dataset.donuts;
  pancakes.innerText = currentOrder.dataset.pancakes;
  status.innerText =
    currentOrder.dataset.delivered === "true" ? "Delivered" : "Pending";
}
