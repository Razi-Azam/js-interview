/*
JavaScript's Nature:
Synchronous and Single-threaded: Executes one operation at a time using a single call stack.
*/

/* Need for Asynchronous Operations:

To handle tasks like delayed execution, JavaScript uses mechanisms such as setTimeout(). */
console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Output:
// Namaste
// Season 2
// JavaScript (after 5 seconds)


/*================== Callback Function ========================*/

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet(function () {
        // Nested further...
      });
    });
  });
});