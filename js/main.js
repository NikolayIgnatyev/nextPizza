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
			if(minusButton.classList.contains('btn-numeric-disable')){
				minusButton.classList.remove('btn-numeric-disable');
			}
        });

        minusButton.addEventListener('click', () => {
            let value = parseInt(countElement.textContent);
			if (value > 1){
				countElement.textContent = value - 1;
				updatePrice();
				if(value >= 1){
					if(minusButton.classList.contains('btn-numeric-disable')){
						minusButton.classList.remove('btn-numeric-disable');
					}
				}
			}
			if (value == 1){
				minusButton.classList.add('btn-numeric-disable');
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

	const selectSelected = document.querySelector(".select-selected");
	const selectItems = document.querySelectorAll(".select-items div");
	const selectItemsGroup = document.querySelector(".select-items");

	
	
	selectSelected.addEventListener("click", function() {
		if(this.nextElementSibling.classList.contains("select-hide")){
			selectItemsGroup.classList.add('animation-open');
			setTimeout(() => {
				this.nextElementSibling.classList.remove("select-hide")
			}, 500)
			
		}
		else{
			selectItemsGroup.classList.add('animation-close');
			setTimeout(() => {
				this.nextElementSibling.classList.add("select-hide")
				selectItemsGroup.classList.remove('animation-close');
				selectItemsGroup.classList.remove('animation-open');
			}, 500)
		}
	  
	});
	
	for (const item of selectItems) {
	  item.addEventListener("click", function() {
		const text = this.innerText;
		selectSelected.innerText = text;
		this.parentElement.classList.add("select-hide");
	  });
	}
	
	document.addEventListener("click", function(e) {
	  if (!e.target.matches('.select-selected')) {
		const dropdowns = document.getElementsByClassName("select-items");
		for (const dropdown of dropdowns) {
		  if (!dropdown.classList.contains('select-hide')) {
			dropdown.classList.add('select-hide');		
		  }
		}
	  }
	});

	selectItemsGroup.classList.add('select-hide');

	const accordionsAll = document.querySelectorAll('.accordion');

	accordionsAll.forEach(accordion => {
		const btnAccordion = accordion.querySelector('.status-bar__open-accordion');


		btnAccordion.addEventListener('click', () => {
			const isOpen = accordion.classList.contains('open');


			const accordionContent = accordion.querySelector('.accordion-content');
			if (isOpen) {
				accordion.classList.remove('open');
				accordionContent.style.maxHeight = 0;
			} else {
				accordion.classList.add('open');
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
			}

			document.querySelectorAll('.accordion').forEach(otherAccordion => {
				if (otherAccordion !== accordion) {
					otherAccordion.classList.remove('open');
					const accordionContent = otherAccordion.querySelector('.accordion-content');
					accordionContent.style.maxHeight = 0;
				}
				
	
			});



			

		})
	})

});

