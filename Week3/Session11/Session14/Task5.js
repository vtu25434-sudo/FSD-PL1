// Function that returns a Promise
const orderPizza = (pizzaType) => {
  return new Promise((resolve, reject) => {
    console.log("Placing your pizza order...");

    // Simulate preparation time
    setTimeout(() => {
      if (pizzaType) {
        resolve(`🍕 Your ${pizzaType} pizza is ready! Enjoy your meal.`);
      } else {
        reject("❌ Order failed: Please select a pizza type.");
      }
    }, 2000);
  });
};

// Using the Promise
orderPizza("Margherita")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
