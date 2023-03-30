//WARNINGS
const FREE_WARNING =
  "Free shipping only applies to single customer orders from South Africa (minimum R1000) or Namibia (minimum $60).";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const FREE_SHIPPING = "Your order qualifies for free shipping!";

//SHIPPING DETAILS
const MIN_SHIPPING_DOLLARS = 60;
const MIN_SHIPPING_RANDS = 1000;
const OTHER_COUNTRIES_SHIPPING = 800;
const RSA_SHIPPING = 400;
const NAM_SHIPPING = 600;

// SHOPPING ITEMS DETAILS
const NONE_SELECTED = 0;
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
//COST OF ITEMS
const TOTAL_COST_ITEMS = shoes + batteries + pens + shirts + toys;
const RAND_TO_DOLLAR_EXCHANGE = 18;
const ITEM_COSTS_RANDS = TOTAL_COST_ITEMS;
const ITEM_COSTS_DOLLARS = Math.floor(
  TOTAL_COST_ITEMS / RAND_TO_DOLLAR_EXCHANGE
);
console.log(ITEM_COSTS_DOLLARS);

// lOCATIONS AND CUSTOMER DETAILS;
const OTHER_COUNTRIES = "Other countries";
const RSA = "South Africa";
const NAM = "Namibia";
const NK = "North Korea";

let customers = 1;

const calcTotalCosts = (location, currency) => {
  //Check if item costs are more than the minimum free shipping price
  const free_shipping_dollars =
    currency === "$" && ITEM_COSTS_DOLLARS >= MIN_SHIPPING_DOLLARS;

  const free_shipping_rands =
    currency === "R" && ITEM_COSTS_RANDS >= MIN_SHIPPING_RANDS;

  if (location == NK) {
    console.log(BANNED_WARNING);
    return;
  }
  if (location !== RSA && location !== NAM) {
    console.log(FREE_WARNING);
    return;
  }

  if (location === RSA && free_shipping_rands && customers === 1) {
    console.log(FREE_SHIPPING);
    console.log(
      `Location: ${location}. Price: ${currency} ${ITEM_COSTS_RANDS}`
    );
  } else if (location === NAM && free_shipping_dollars && customers === 1) {
    console.log(FREE_SHIPPING);
    console.log(
      `Location: ${location}. Price: ${currency} ${ITEM_COSTS_DOLLARS}`
    );
  } else {
    const checkoutMessage =
      location === RSA
        ? `Location: ${location}. Your order amount is:${currency}${ITEM_COSTS_RANDS}. Plus ${currency}${RSA_SHIPPING} shipping is: ${currency}${
            ITEM_COSTS_RANDS + RSA_SHIPPING
          }`
        : `Location: ${location}. Your order is:${currency}${ITEM_COSTS_DOLLARS}. Plus ${currency}${NAM_SHIPPING} shipping is: ${currency}${
            ITEM_COSTS_DOLLARS + NAM_SHIPPING
          }`;
    console.log(FREE_WARNING);
    console.log(checkoutMessage);
  }
};

calcTotalCosts(RSA, "R");
