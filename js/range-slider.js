const rangeSlider = document.getElementById('range-slider');
const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
};

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [500, 999999],
		connect: true,
		step: 1,
    range: {
			'min': [500],
			'max': [999999]
    }
	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
        const allPrice = document.querySelectorAll('.products-grid__item');
        allPrice.forEach((item) => {
            const children = item.querySelector('.product-price__current')
            const price = parseInt(priceWithoutSpaces(children.innerHTML))
            if(values[0] > price || values[1] < price) {
                item.style.display = `none`;
            }
            if(values[0] < price && values[1] > price) {
                item.style.display = `block`;
            }

        })
        
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;


		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}