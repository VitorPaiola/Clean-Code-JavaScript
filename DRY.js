// Exemplo de código que segue o conceito DRY:
function calculateTotalPrice(products, maxSize) {
    let productsList = [...products]
    productsList.length = maxSize
    let total = 0
    productsList.forEach(product => {
        total += product.price
    })
    return total
}

let products = [
    { name: "Product 1", price: 5 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 15 },
    { name: "Product 4", price: 20 },
    { name: "Product 5", price: 25 }
]

console.log(calculateTotalPrice(products, 3))
console.log(calculateTotalPrice(products, 4))
console.log(calculateTotalPrice(products, 5))