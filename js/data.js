const product = [
  {
    id: "1",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.9",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "999 111",
  },
  {
    id: "2",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.9",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "819 789",
    oldPrice: "915 111",
  },
  {
    id: "3",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.8",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "915 111",
  },
  {
    id: "4",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.8",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "915 111",
  },
  {
    id: "5",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "3.9",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "915 111",
  },
  {
    id: "6",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.9",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "915 111",
  },
  {
    id: "7",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.3",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "560 789",
    oldPrice: "598 111",
  },
  {
    id: "8",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.1",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "120 789",
    oldPrice: "915 111",
  },
  {
    id: "9",
    img01: `<img src="img/macbook.jpg" alt="Макбук">`,
    img02: `<img src="img/macbook-2.jpg" alt="Макбук">`,
    img03: `<img src="img/macbook-3.jpg" alt="Макбук">`,
    title: "Ноутбук Apple MacBook Pro 16 TB i7 2.6/16/512 SSD SG MVVJ2RU/A",
    rate: "4.2",
    reviews: "83",
    article: "879876",
    availiable: "13",
    price: "990 789",
    oldPrice: "915 111",
  },
];

const productsGrid = document.querySelector(".products-grid");
productsGrid.innerHTML = product
  .map((item) => {
    return `
         <li class="products-grid__item">
         <article class="product">

             <div class="product__image">
                 <div class="product__switch image-switch">
                 <img class="left" src="img/right.png" alt="left">
                        <div class="image-switch__item">
                            <div class="image-switch__img">${item.img01}</div>
                            <div class="image-switch__img">${item.img02}</div>
                            <div class="image-switch__img">${item.img03}</div>
                        
                        </div>
                        <img class="right" src="img/right.png" alt="right"> 
                    </div>
                 <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
             </div>
             <h3 class="product__title">
                 <div>${item.title}</div>
             </h3>
             <div class="product__props">
                 <span class="product__rating">
                     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path
                             d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                     </svg>
                     ${item.rate}
                 </span>
                 <span class="product__testimonials">${item.reviews} відгуки</span>
             </div>
             <div class="product__info">
                 <span class="product__term">Артикуль: ${item.article}</span>
                 <span class="product__available">В наявності: ${item.availiable} шт</span>
             </div>
             <div class="product__price product-price">
                 <span class="product-price__current">${item.price} ₴</span>
                 <span class="product-price__old">${item.oldPrice} ₴</span>
             </div>
             <button class="product__btn btn">Добавити в корзину</button>
         </article>
         </li>
         `;
  })
  .join("");

// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const productSwitch = document.querySelector('.product__switch ');
// const switchImg = document.querySelectorAll('.image-switch__img');
// const productImage = document.querySelector('.product__image');


