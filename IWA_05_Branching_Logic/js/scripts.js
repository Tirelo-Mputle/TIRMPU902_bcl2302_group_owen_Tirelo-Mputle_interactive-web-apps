const FREE_WARNING =
  "Free shipping only applies to single customer orders from South Africa or Namibia.";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

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

const MIN_SHIPPING_DOLLARS = 60;
const MIN_SHIPPING_RANDS = 1000;

const calcTotalCosts = (location, currency) => {
  const shippingCost = calcShipping(location, currency);
  const free_shipping_dollars =
    currency === "$" && shippingCost >= MIN_SHIPPING_DOLLARS;
  console.log(free_shipping_dollars);
  const free_shipping_rands =
    currency === "R" && shippingCost >= MIN_SHIPPING_RANDS;

  calcShipping(location, currency);
  if (location === RSA || location === NAM) {
    if ((free_shipping_dollars || free_shipping_rands) && customers === 1) {
      console.log("shipping free");
      console.log(location, currency, shippingCost);
    } else {
      console.log(FREE_WARNING);
    }
  }
};

calcTotalCosts(NAM, "$");

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCostOfItems = shoes + batteries + pens + shirts + toys + 400;
console.log(totalCostOfItems);
// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location === NAM && customers < 2) {
// 			if (location === RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location === 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)
