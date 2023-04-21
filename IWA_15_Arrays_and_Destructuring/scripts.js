// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below
const { lists } = data;
/**The array in the first array in lists */
const first = false ? [] : lists[0][1];
/**The array in the second array in lists */
const second = false ? [] : lists[1][1];
/**The array in the third array in lists */
const third = false ? [] : lists[2][1];
const result = [];
/**Compares the last number between all
 * the arrays and returns the biggest number.
 * It will remove that number from the array and add
 * it to the results array */
const extractBiggest = () => {
  /**The biggest last number between all
   * the arrays */
  let biggest;
  /**The last number of the first array */
  let lastNumberInFirst = first[first.length - 1];
  /**The last number of the second array */
  let lastNumberInSecond = second[second.length - 1];
  /**The last number of the third array */
  let lastNumberInThird = third[third.length - 1];

  if (first && lastNumberInFirst >= lastNumberInSecond) {
    first.pop();
    return (biggest = lastNumberInFirst);
  }

  if (second && lastNumberInSecond > lastNumberInThird) {
    second.pop();
    return (biggest = lastNumberInSecond);
  }
  if (third && lastNumberInThird) {
    third.pop();
    return (biggest = lastNumberInThird);
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
