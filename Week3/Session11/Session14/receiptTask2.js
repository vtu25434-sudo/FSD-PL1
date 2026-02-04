const generateReceipt = (price, tip) => {
  const total = price + tip;
  console.log(`The total bill is ₹${total} (Price: ₹${price}, Tip: ₹${tip})`);
};

generateReceipt(500, 50);
