document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: '29.99' },
        { id: 2, name: 'Product 2', price: '19.99' },
        { id: 3, name: 'Product 3', price: '599.9999' }
    ]

    const cart = []
    const productList = document.querySelector('#product-list')
    const cartItems = document.querySelector('#cart-items')
    const emptyCartMessage = document.querySelector('#empty-cart')
    const cardTotalMessage = document.querySelector('#cart-total')
    const totalPriceDisplay = document.querySelector('#total-price')
    const checkOutBtn = document.querySelector('#checkout-btn')

    products.forEach((product) => {
        const productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `<span>${product.name} - $${product.price}</span> <button data-id="${product.id}">Add to cart</button>`
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p => p.id === productId)
            addToCart(product)
        }
    })

    function addToCart(product) {
        cart.push(product)
        renderCart();
    }

    function renderCart() {
        cartItems.innerText = ""
        let totalPrice = 0
        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden')
            cardTotalMessage.classList.remove('hidden')
            cart.forEach((item, index) => {
                totalPrice += parseFloat(item.price)
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `${item.name} - $${item.price}`
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `${totalPrice}`
            })
        } else {
            emptyCartMessage.classList.add('hidden')
            totalPriceDisplay.textContent = `$0.00`
        }
    }

    checkOutBtn.addEventListener('click', () => {
        cart.length = 0
        alert('Checkout Successfully')
        renderCart()
    })
})