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
		const sumItems = document.querySelector('.cost-all-items').textContent;
		const delyveryCost = document.querySelector('.cost-delyvery').textContent;
		const duesCost = document.querySelector('.cost-dues').textContent;

		let sumItemsInt = parseInt(sumItems);
		let delyveryCostInt = parseInt(delyveryCost);
		let duesCostInt = parseInt(duesCost);

		let totalSum = sumItemsInt + delyveryCostInt + duesCostInt;

		const totalSumElement = document.querySelector('.order-sum__value');
		totalSumElement.textContent = totalSum;
	}

	updateTotalSum();

});

