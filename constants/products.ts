const categories = ["Beef", "Fish", "Pork", "Poultry"];
const images = [
  require("../assets/images/wagustake.png"),
  require("../assets/images/rumpstake.png"),
  require("../assets/images/meatstake.png"),
  require("../assets/images/rawstake.png"),
];

// Generate 45 products with random categories and matching names
const products = Array.from({ length: 45 }).map((_, index) => {
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  return {
    id: (index + 1).toString(),
    name: `${randomCategory} Product ${index + 1}`, // Name includes category for clarity
    category: randomCategory,
    price: parseFloat((Math.random() * 300 + 100).toFixed(2)), // Ensure price is a number
    image: images[Math.floor(Math.random() * images.length)], // Random image
  };
});

export default products;
