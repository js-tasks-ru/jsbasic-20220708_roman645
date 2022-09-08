import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories //передаётся массив категорий
    this._createRibbonMenu()
    this._scrollingMenu()
    this._selectCategory()
  }

  //отрисовка вёрстки
  _createRibbonMenu() {
    this.menu = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">
          <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
          <a href="#" class="ribbon__item" data-id="salads">Salads</a>
          <a href="#" class="ribbon__item" data-id="soups">Soups</a>
          <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
          <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
          <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
          <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
          <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
          <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)
  }

  //прокрутка меню
  _scrollingMenu() {
    this.ribbonInner = this.menu.querySelector('.ribbon__inner') //получаем все элементы внутри ribbon__inner  
    this.arrowRight = this.menu.querySelector('.ribbon__arrow_right') // получаем кнопку прокрутки вперёд
    this.arrowLeft = this.menu.querySelector('.ribbon__arrow_left') //получаем кнопку прокрутки назад

    this.arrowLeft.classList.remove('ribbon__arrow_visible') // скрываем изначально кнопку прокрутки назад

    this.menu.addEventListener('click', event => {
      if (event.target.closest('.ribbon__arrow_right') === this.arrowRight) {
        this.ribbonInner.scrollBy(350, 0) //прокрутка вперёд
      } else if (event.target.closest('.ribbon__arrow_left') === this.arrowLeft) {
        this.ribbonInner.scrollBy(-350, 0) // прокрутка назад
      }
    })
    
    this.ribbonInner.addEventListener("scroll", () => {
      this._changeArrow() // скрываев кнопки прокрутки
    })
  }

  _changeArrow() {
    let scrollWidth = this.ribbonInner.scrollWidth //получаем полную ширину документа с прокручиваемой частью
    let clientWidth = this.ribbonInner.clientWidth //получаем ширину окна
    this.scrollLeft = this.ribbonInner.scrollLeft //получаем невидимую область с левого края
    this.scrollRight = scrollWidth - this.scrollLeft - clientWidth //получаем невидимую область с правого края

    if (this.scrollLeft < 1) {
      this.arrowLeft.classList.remove('ribbon__arrow_visible') //скрываем кнопку назад
    } else {
      this.arrowLeft.classList.add('ribbon__arrow_visible') //показываем кнопку назад
    }

    if (this.scrollRight < 1) {
      this.arrowRight.classList.remove('ribbon__arrow_visible') //скрываем кнопку вперёд
    } else {
      this.arrowRight.classList.add('ribbon__arrow_visible') //показываем кнопку вперёд
    }
  }

  //выбор конкретной категории по id
  _selectCategory() {
    this.menu.addEventListener('click', (event) => {
      if (event.target === event.target.closest('.ribbon__item')) {
        event.preventDefault()               //останавливаем действия браузера

        this._styleCategory(event.target.dataset.id)

        this.customEvent = new CustomEvent('ribbon-select', {
          detail: event.target.dataset.id, //получаем категорию  
          bubbles: true
        })

        this.menu.dispatchEvent(this.customEvent)
      }

      this.menu.addEventListener('click', this.customEvent)
    })
  }

  //выделяем активную категорию
  _styleCategory(target) {
    let categories = this.menu.querySelectorAll('a') //получаем список элементов документа menu с селектором 'a'

    for (let k of categories) {
      if (target === k.dataset.id) {
        k.classList.add('ribbon__item_active') // выделяем стилем выбранную категорию
      } else {
        k.classList.remove('ribbon__item_active') //убираем стиль у предыдущей категории
      }
    }
  }

  get elem() {       
    return this.menu
  }
}