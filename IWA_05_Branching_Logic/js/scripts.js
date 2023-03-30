const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

// let location;
const OTHER_COUNTRIES = "Other countries";
const RSA = "South Africa";
const NAM = "Namibia";
const NK = "North Korea";
let currency = null;
let customers = 1;

const calcShipping = (location, currency) => {
  let shipping;
  if (location === OTHER_COUNTRIES && currency === "$") {
    shipping = 800;
    console.log(shipping);
    return shipping;
  }

  if (location === RSA && currency === "R") {
    shipping = 400;
    console.log(shipping);
    return shipping;
  }

  if (location === NAM && currency === "$") {
    shipping = 600;
    console.log(location, shipping);
    return shipping;
  }
  if (location === NK) {
    console.log(BANNED_WARNING);
  }
};

calcShipping("South Africa", "R");
calcShipping("Other countries", "$");
calcShipping("Namibia", "$");
calcShipping("North Korea", "$");

const MIN_SHIPPING_DOLLARS = 60;
const MIN_SHIPPING_RANDS = 1000;
const FREE_SHIPPING_DOLLARS =
  currency === "$" && shippingCost >= MIN_SHIPPING_DOLLARS;
console.log(FREE_SHIPPING_DOLLARS);
const FREE_SHIPPING_RANDS =
  currency === "R" && shippingCost >= MIN_SHIPPING_RANDS;

const calcTotalCosts = (location, currency) => {
  const shippingCost = calcShipping(location, currency);
  calcShipping(location, currency);
  if ((FREE_SHIPPING_DOLLARS || FREE_SHIPPING_RANDS) && customers === 1) {
    console.log("shipping free");
  } else {
    console.log("We have a problem");
  }
};

calcTotalCosts("Namibia", "$");

// shoes = 300 * 1
// toys - 100 * 5
// hirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED'

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location === NAM && customers < 2) {
// 			if (location === RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location === 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)
