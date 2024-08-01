document.addEventListener('DOMContentLoaded', () => {
    const itemsCart = document.querySelectorAll('.cart-item');

    itemsCart.forEach(itemCart => {
        const plusButton = itemCart.querySelector('.btn-plus');
        const minusButton = itemCart.querySelector('.btn-minus');
        const countElement = itemCart.querySelector('.cart-item-count');
		const priceElement = itemCart.querySelector('.cart-price');
		const basePrice = parseInt(itemCart.querySelector('.item-price').getAttribute('data-base-price'));

		const updatePrice = () => {
            const count = parseInt(countElement.textContent);
            const totalPrice = basePrice * count;
			console.log(basePrice);
			console.log(count);
            priceElement.textContent = totalPrice;
        };

        plusButton.addEventListener('click', () => {
            let value = parseInt(countElement.textContent);
			countElement.textContent = value + 1;
			updatePrice();
        });

        minusButton.addEventListener('click', () => {
            let value = parseInt(countElement.textContent);
			if (value > 0){
				countElement.textContent = value - 1;
				updatePrice();
			}
        });
    });
});
