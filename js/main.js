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
            priceElement.textContent = totalPrice;
			updateTotalSum();
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

	

	const updateSumOrder = () => {
		const sumOrderElement = document.querySelector('.cost-all-items');
		let totalSum = 0;

		itemsCart.forEach(itemCart => {
			const priceItem = parseInt(itemCart.querySelector('.cart-price').textContent);

			totalSum = totalSum + priceItem;
		})

		sumOrderElement.textContent = totalSum;
	}


	const updateTotalSum = () => {
		updateSumOrder();
		const sumItems = parseInt(document.querySelector('.cost-all-items'));
		const delyveryCost = parseInt(document.querySelector('.cost-delyvery'));
		const duesCost = parseInt(document.querySelector('.cost-dues'));

		console.log(sumItems);
		console.log(delyveryCost);
		console.log(duesCost);

		let totalSum = sumItems + delyveryCost + duesCost;

		const totalSumElement = document.querySelector('.order-sum__value');
		totalSumElement.textContent = totalSum;
	}

	updateTotalSum();

});

