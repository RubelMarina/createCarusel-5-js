function createCarousel(slidesCount) {
  const container =  document.querySelector('#carousel');

  let slides = document.createElement('ul');
  let indicators = document.createElement('div');
  let controls = document.createElement('div');
  let pointer = null;
    
  function initSlides() {
    slides.setAttribute('class', 'slides');
    
    for (let i = 0, n = slidesCount; i < n; i++) {
      let slide = document.createElement('li');
      let link = document.createElement('a');
      slide.setAttribute('class', 'slides__item');
      link.setAttribute('href', 'fas fa-pause');
      i === 0 && slide.classList.add('active');
      slides.appendChild(slide);
      slide.appendChild(link);
    }
    container.appendChild(slides);
    slides = container.querySelector('.slides');
    slide = container.querySelectorAll('.slides__item');
};
  
  function initControls() {
    controls.setAttribute('class', 'controls');
    for (let i = 0, n = 3; i < n; i++) {
      let control = document.createElement('div');
      let but = document.createElement('i');
      control.setAttribute('class', 'controls__item');
      but.setAttribute('class', 'fas');
      i === 0 && control.classList.add('controls__prev');
      i === 1 && control.classList.add('controls__next');
      i === 2 && control.classList.add('controls__pause');
      i === 0 && but.classList.add('fa-chevron-left');
      i === 1 && but.classList.add('fa-chevron-right');
      i === 2 && but.classList.add('fa-play');
      controls.appendChild(control);
      control.appendChild(but);
    }
    container.appendChild(controls);
    controls = container.querySelector('.controls');
    control = container.querySelectorAll('.controls__item');
  };

  function initIndicators() {
    indicators.setAttribute('class', 'indicators');

    for (let i = 0, n = slidesCount; i < n; i++) {
      let indicator = document.createElement('span');
      indicator.setAttribute('class', 'indicators__item');
      indicator.dataset.slideTo = `${i}`;
      i === 0 && indicator.classList.add('active');
      indicators.appendChild(indicator);
    }
    container.appendChild(indicators);
    indicators = container.querySelector('.indicators');
    indicator = container.querySelectorAll('.indicators__item');
  };
  
  function createStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
    /*
    essential styles:
    these make the slideshow work
      */
      * {
        box-sizing: border-box;
      }

      .slides {
        position: relative;
        height: 100%;
        padding: 0px;
        margin: 0px;
        list-style-type: none;
      }

      .slides__item {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: -999;
        transition: opacity 1s;
        font-size: 40px;
        padding: 40px;
        box-sizing: border-box;
        background: #333;
        color: #fff;
      }

      .active {
        opacity: 1;
        z-index: 1;
      }

      /*
      non-essential styles:
      just for appearance; change whatever you want
      */

      .slides__item:nth-of-type(1) {
        background: red;
      }

      .slides__item:nth-of-type(2) {
        background: orange;
      }

      .slides__item:nth-of-type(3) {
        background: green;
      }

      .slides__item:nth-of-type(4) {
        background: blue;
      }

      .slides__item:nth-of-type(5) {
        background: purple;
      }

      .carousel {
        position: relative;
        height: 150px;
        user-select: none;
        /* z-index: -1; */

      }
      .controls {
        display: flex;
        gap: 1em;
        position: relative;
        left: 0;
        width: 200px;
        transform: translateY(1em);
      }
      .controls__item {
        display: flex; 
        background-color: gray;
        display: block;
        padding: 0.5em 1em;
        height: 30px;
        text-align: center;
        cursor: pointer;
        width: 70px;
        user-select: none;
        } 

      .indicators {
        display: flex;
        gap: 1em; 
        position: absolute;
        top: 100%;
        right: 0;
        width: 200px;
        transform: translateY(1em);
        margin: 0;
      }
      .indicators__item {
        background-color: gray;
        display: block;
        height: 30px;
        align-items: center;
        cursor: pointer;
        flex-basis: 40px;
        user-select: none;
      }
   
    `
    document.head.append(style);
  };
 
  function init() {
    initSlides();
    initIndicators();
    initControls();
    createStyle();
  };

 init();

 function indicate(e) {
  let target = e.target;

  if (target && target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    if (pointer) {
      pointer.style.backgroundColor = '';
    }
    pointer = target;
  }
};

indicators.addEventListener('click', indicate);

};

createCarousel(5);
