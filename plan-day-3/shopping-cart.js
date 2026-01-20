const cart = [
    {item : "book", price : 500},
    {item : "glass", price : 50},
    {item : "mouse", price : 5500},
];

const expensive = cart.filter(product => product.price> 100);
console.log("more than 100",expensive);

const prices = cart.map (product => product.price);
console.log("prices",prices);

const total = cart.reduce((acc, product) => acc+product.price,0);
console.log("total",total);
