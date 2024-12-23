const cartItems = document.querySelectorAll(".cart-item");
console.log(cartItems)
cartItems.forEach((item) => {
    const priceElement = item.querySelector(".unit-price")
    const quantityElement = item.querySelector(".quantity")
    const incrementBtn = item.querySelector(".fa-plus-circle")
    const decrementBtn = item.querySelector(".fa-minus-circle")
    const removeBtn = item.querySelector(".delete")
    const likeBtn = item.querySelector(".heart-icon")

    let quantity = parseInt(quantityElement.textContent)
    let price = parseInt(priceElement.textContent.replace(" $", ""))

    const incrementTotal = () => {
        const totalAmount = document.querySelector('.total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total + price
    }

    const decrementTotal = () => {
        const totalAmount = document.querySelector('.total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - price
    }

    incrementBtn.addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
        incrementTotal()
    })

    decrementBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity -= 1;
            quantityElement.textContent = quantity;
            decrementTotal()
        }
    })

    removeBtn.addEventListener('click', () => {
        const itemTotal = price * quantity;
        const totalAmount = document.querySelector('.total-amount');
        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - itemTotal;
        item.remove();
    })

    likeBtn.addEventListener('click', () => {
        const likeClassList = likeBtn.getAttribute("class")
        console.log(likeClassList)
        if(likeClassList.includes("fas")){
            likeBtn.setAttribute("class", "fa-regular fa-heart heart-icon")
        } else {
            likeBtn.setAttribute("class", "fas fa-heart heart-icon")
        }
    })

})