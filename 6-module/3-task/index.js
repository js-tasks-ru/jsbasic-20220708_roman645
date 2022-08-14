import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #carus;
 
  constructor(slides) {
    this.slides = slides; 
    this.#create_carus(); 
    this.#initCarousel(); 
  }
 
  #create_carus() {
    this.#carus = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);
 
    let slides = this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img
          src="/assets/images/carousel/${item.image}"
          class="carousel__img"
          alt="slide"
        />
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>`));
 
    this.#carus.querySelector(`.carousel__inner`).append(...slides);
  }

  #initCarousel() {
    let carouselElem = this.#carus;
    let btnNext = carouselElem.querySelector(".carousel__arrow_right");
    let btnPrev = carouselElem.querySelector(".carousel__arrow_left");
    let slider = carouselElem.querySelector(".carousel__inner");
    let counter = 0;
    let width = slider.offsetWidth;
    let transition = 0;
  
    btnPrev.style.display = 'none';
  
    btnNext.addEventListener("click", function () {
          counter++;
          transition += width;
          slider.style.transform = `translateX(-${transition}px)`; 
          btnPrev.style.display = '';
        if (counter == 3) { 
          btnNext.style.display = 'none'; 
        };
    });
   
    btnPrev.addEventListener("click", function () {
          counter--; 
          transition -= width;
          slider.style.transform = `translateX(-${transition}px)`;
          btnNext.style.display = ''; 
        if (counter == 0) { 
          btnPrev.style.display = 'none';
        }
    })
  }

  get elem() {
    return this.#carus
  }

}