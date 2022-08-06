function initCarousel() {
  let elem = document.querySelector('.carousel__inner');
  let width = elem.offsetWidth;
  let position = 0;
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');

    arrowLeft.onclick = function() {
    position += width;
    elem.style.transform = `translateX(${position}px)`;
  };

  arrowRight.onclick = function() {
    position -= width;
    elem.style.transform = `translateX(${position}px)`;
  };
};

initCarousel();