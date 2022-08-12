export default class ProductCard {
  
  constructor(productCard) {
   
    


    
    html(); {
      let template = createElement(`  
      <div class="card">
      ${this.product.map(obj =>
        `
    <div class="card__top">
        <img src="/assets/images/products/${obj.image}" class="card__image" alt="product">
        <span class="card__price">€${obj.price}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${obj.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `).join('')}
</div> `)
this.elem.innerHTML = template; 
    }
    deleteRow(); {
      for (const button of this.elem.querySelectorAll("button"))
        button.addEventListener('click', (event) =>
        event.target.closest("tr").remove())
    }
  }
}

let product = {
  name: "Laab kai chicken salad", // название товара
  price: 10, // цена товара
  category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
  image: "laab_kai_chicken_salad.png", // название картинки товара
  id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}

let productCard = new ProductCard(product);

