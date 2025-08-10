document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 2", price: 59.99},
        {id: 3, name: "Product 3", price: 89.99},
        {id: 4, name: "Product 4", price: 69.99}
    ]

    const cart = []

    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMessage = document.getElementById('empty-cart')
    const cartTotalMessage = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkOutBtn = document.getElementById('checkout-btn')

    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button>
        `
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute("data-id"))
            const product = products.find(p => p.id === productId)
            addToCart(product)
            console.log(product);
            
        }
    })

    function addToCart(product) {
        cart.push(product)
        renderCart()
    }

    function renderCart() {
        cartItems.innerHTML = ""
        let totalPrice = 0
        if(cart.length > 0) {
            emptyCartMessage.classList.add('hidden')
            cartTotalMessage.classList.remove('hidden')

            cart.forEach((item, idx) => {
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                `
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
            })
            
        } else {
            emptyCartMessage.classList.remove('hidden')
        }
    }

    checkOutBtn.addEventListener('click', () => {
        cart.length = 0
        totalPriceDisplay.textContent = "$00.00"
        alert("Checkout succesfully!")
        renderCart()
    })
})