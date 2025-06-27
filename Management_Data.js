console.log("Data management with objects, sets and maps!");

// Object for storing products
const products = {
    1: {id : 1, nameProduct: "Television", price: 1200},
    2: {id : 2, nameProduct: "Xiaomi", price: 800},
    3: {id : 3, nameProduct: "iPad", price: 900}
};
// Test to verify the products
console.log("Products object:", products);

// Set so that products cannot be repeated
const productsSet = new Set(Object.values(products).map(product => product.nameProduct));

// Test to verify if any product is not repeated
console.log("Set of unique products", productsSet);

// Map to add category to products
const productsMap = new Map([
    ["Electronic", "Television"],
    ["Mobile", "Xiaomi"],
    ["Tablet", "iPad"]
]);

// Test to verify that the product and its category are displayed correctly
console.log("Map of products and categories:", productsMap);

console.log("Object of products:");

// For-in to traverse the object storing the products and print them
for (const id in products){
    console.log(`Product ID: ${id}, Details:`, products[id]);
};

console.log("Set of unique products:");

// For-of to tour the set and print the unique products
for(const product of productsSet){
    console.log("Unique product:", product);
};

console.log("Map of products and categories:");

// forEach method for printing each product and its category
productsMap.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`);
});
