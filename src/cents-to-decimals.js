function centsToDecimals(cents) {
  if (typeof cents === "string") return undefined;
  if (!cents) return 0;
  return cents / 100;
}

console.log(centsToDecimals());

//
// function centsToDecimals(cents) {
//   return cents / 100;
// }
// console.log(
//   "\nShould convert value from cents to a floating point number with 2 decimals"
// );
// console.log(centsToDecimals(105) === 1.05);
// console.log(centsToDecimals(23) === 0.23);

// make the test fail
// make the test pass
// refactor

