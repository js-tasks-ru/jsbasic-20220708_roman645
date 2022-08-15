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
    let slidesLength = this.slides.length; 
    let carouselElem = this.#carus;
    let carouselArrowRight= carouselElem.querySelector(".carousel__arrow_right");
    let carouselArrowLeft= carouselElem.querySelector(".carousel__arrow_left");
    let carouselinner = carouselElem.querySelector(".carousel__inner")
    let count = 1;
    let transition = 0;
 
    carouselArrowRight.style.display = '';
    carouselArrowLeft.style.display = 'none';
 
    carouselElem.addEventListener("click", handler);
 
    function handler(e) {
      let width = carouselinner.offsetWidth; 
 
      if (e.target.closest('.carousel__arrow_right')) { 
        console.log(width);
        transition += width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count++;
        console.log(transition);
      }
 
      else if (e.target.closest('.carousel__arrow_left')) { 
        transition -= width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count--
      };
 
      count === 1 ? carouselArrowLeft.style.display = 'none' :   carouselArrowLeft.style.display = '';
      count >=  slidesLength ? carouselArrowRight.style.display = 'none' :   carouselArrowRight.style.display = ''; 
    }
  }
 
  get elem() {
    return this.#carus
  }
 
}