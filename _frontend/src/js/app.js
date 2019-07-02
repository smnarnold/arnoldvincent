import { throttle, debounce } from 'throttle-debounce';

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector('.site-header'),
      main: document.querySelector('main'),
      footer: document.querySelector('.site-footer'),
      gallerySwipers: document.querySelectorAll('.js-gallery-swiper'),
      hubSwipers: document.querySelectorAll('.js-hub-swiper'),
      popupImages: document.querySelectorAll('.js-popup-image'),
    };

    this.counter = 0;
  }

  /**
   * Methods
   */
  init() {
    this.initHubSwipers();
    this.initGallerySwipers();
    this.bindEvents();
  }

  initHubSwipers() {
    let settings = {
      freeMode: true,
      freeModeSticky: true,
      freeModeMinimumVelocity: 0.4,
      freeModeMomentumRatio: 0.28,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      slidesPerView: 1.2,
      slidesPerColumn: 2,
      spaceBetween: 10,
      breakpointsInverse: true,
      breakpoints: {
        576: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.25,
        },
        992: {
          slidesPerView: 3,
        },
      },
    }

    for (const hub of this.dom.hubSwipers) {
      if(hub.parentNode.classList.contains('swiper--hub-square')) {
        settings = { ...settings, slidesPerView: 'auto', breakpoints: {}}
      } else if(hub.parentNode.classList.contains('swiper--hub-automatic')) {
        settings = { ...settings, slidesPerView: 'auto', breakpoints: {}, slidesPerColumn: 1}
      }

      let hubSwiper = new Swiper(hub, {...settings, on: {
        imagesReady: () => {
          hub.parentNode.classList.add('is-ready');
          hubSwiper.update();
        },
      }});
    }
  }

  initGallerySwipers() {
    for (const gallery of this.dom.gallerySwipers) {
      const swiper = new Swiper(gallery, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        freeModeSticky: true,
        freeModeMinimumVelocity: 0.4,
        freeModeMomentumRatio: 0.28,
        breakpointsInverse: true,
        breakpoints: {
          768: {
            spaceBetween: 20,
          },
          992: {
            spaceBetween: 30,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        on: {
          imagesReady: () => {
            gallery.parentNode.classList.add('is-ready');
            gallery.update();
          },
        },
      });

      const imgs = gallery.querySelectorAll('img');
      let counter = 0;

      for (const img of imgs) {
        img.addEventListener(
          'load',
          () => {
            counter += 1;
            if (counter === imgs.length) swiper.update();
          },
          false,
        );
      }
    }
  }

  bindEvents() {
    for (const image of this.dom.popupImages) {
      image.addEventListener('click', () => this.generateImagePopup(image));
    }

    // window.addEventListener('scroll', throttle(300, () => this.setScrollDirection()));
  }

  generateImagePopup(img) {
    const src = img.getAttribute('data-src');
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class='popup popup--image'><div class="popup__wrapper"><img src='${src}'></div></div>`,
    );
    const popup = document.querySelector('.popup');
    setTimeout(() => popup.classList.add('is-active'), 0);
    popup.addEventListener('click', () => this.deletePopup(popup));
  }

  deletePopup(popup) {
    popup.classList.remove('is-active');
    popup.addEventListener('transitionend', () => {
      if (popup && popup.parentNode !== null) {
        popup.parentNode.removeChild(popup);
      }
    });
  }
}

var site = new Site();
site.init();
