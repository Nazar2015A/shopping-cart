
const products = document.querySelectorAll('.product');

if (products) {
	products.forEach(el => {
		let currentProduct = el;
		const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__img');
		const imagePagination = currentProduct.querySelector('.image-pagination');
		if (imageSwitchItems.length > 1) {
			imageSwitchItems.forEach((el, index) => {
				el.setAttribute('data-index', index);
				imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;
				el.addEventListener('mouseenter', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
				});

				el.addEventListener('mouseleave', (e) => {
					currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item--active')});
					currentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
				});
			});
		}
	});
}
const gridItem = document.querySelectorAll('.products-grid__item');
gridItem.forEach((item) => {
  let left = item.querySelector(".left");
  let right = item.querySelector(".right");
  let switchImg = item.querySelectorAll(".image-switch__img");
  let productImage = item.querySelector(".product__image");
  let imageItem = item.querySelector(".image-switch__item");
  let paginationItem = item.querySelectorAll('.image-pagination__item');

  imageItem.style.width = productImage.offsetWidth * switchImg.length + "px";

  let sliderCount = 0;


  right.addEventListener('click', nextSlide)
  left.addEventListener('click', prevSlide)


  function nextSlide() {
    sliderCount++;
    if (sliderCount >= switchImg.length) {
      sliderCount = 0;
    }
    rollSlider();
    thisSlide(sliderCount);
  }

  function rollSlider() {
    imageItem.style.transform = `translateX(${-sliderCount * productImage.offsetWidth}px)`;
  }
  function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
      sliderCount = switchImg.length - 1;
    }
    rollSlider();
    thisSlide(sliderCount);
  }
  function thisSlide(index) {
    paginationItem.forEach((item) => {
      item.classList.remove('image-pagination__item--active');
    })
    paginationItem[index].classList.add('image-pagination__item--active');
	
  }
  paginationItem.forEach((item, index) => {
	item.addEventListener('click', () => {
		sliderCount = index;
		rollSlider()
		thisSlide(sliderCount)
	})
})
});