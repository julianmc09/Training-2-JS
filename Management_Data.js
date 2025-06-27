console.log("Data management with objects, sets and maps");

const products = {
    1: {id : 1, nameP: "Television", price: 1200},
    2: {id : 2, nameP: "Smartphone", price: 800},
    3: {id : 3, nameP: "iPad", price: 900}
};
console.log("Products object:", products);

const productsSet = new Set(Object.values(products).map(product => product.nameP)); 
console.log("Set of unique products", productsSet);

const productsMap = new Map([
    ["Electronic", "Television"],
    ["Mobile", "Xiaomi"],
    ["Tablet", "iPad"]
]);
console.log("Map of products and categories:", productsMap);

for (const id in products){
    console.log(`Product ID: ${id}, Details:`, products[id]);
}

for(const product of productsSet){
    console.log("Unique product", product);
}

productsMap.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`);
});
