function initCarousel() {
  let viewport = document.querySelector('.carousel__inner').offsetWidth;
  let btnNext = document.querySelector('.carousel__arrow_right');
  let btnPrev = document.querySelector('.carousel__arrow_left');
  let slider = document.querySelector('.carousel__inner');
  let viewSlide = 0;

  btnPrev.style.display = 'none';

  btnNext.addEventListener("click", function () {
        viewSlide++;
        slider.style.transform = `translateX(${-viewSlide * viewport}px)`; 
        btnPrev.style.display = '';
      if (viewSlide == 3) { 
        btnNext.style.display = 'none'; 
      };
  });
 
  btnPrev.addEventListener("click", function () {
        viewSlide--; 
        slider.style.transform = `translateX(${-viewSlide * viewport}px)`;
        btnNext.style.display = ''; 
      if (viewSlide == 0) { 
        btnPrev.style.display = 'none';
      };
  });
};

initCarousel();