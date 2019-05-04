import { throttle, debounce } from 'throttle-debounce';

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector('.site-header'),
      main: document.querySelector('main'),
      footer: document.querySelector('.site-footer'),
      gallerySwipers: document.querySelectorAll('.js-gallery-swiper'),
      hubSwipers: document.querySelectorAll('.js-hub-swiper'),
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
    for (const hub of this.dom.hubSwipers) {
      new Swiper(hub, {
        slidesPerView: 1.2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        mousewheel: {
          releaseOnEdges: true,
          sensitivity: 20
        },
        breakpointsInverse: true,
        breakpoints: {
          576: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.25
          },
          992: {
            slidesPerView: 3
          },
        }
      });
    };
  }

  initGallerySwipers() {
    for (const gallery of this.dom.gallerySwipers) {
      const swiper = new Swiper(gallery, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        mousewheel: {
          releaseOnEdges: true,
          sensitivity: 20
        }
      });

      const imgs = gallery.querySelectorAll('img');
      let counter = 0;

      for (const img of imgs) {
        img.addEventListener( 'load', () => {
          counter += 1;
          if(counter === imgs.length) swiper.update();
        }, false );
      }
    };
  }

  bindEvents() {
    // window.addEventListener('scroll', throttle(300, () => this.setScrollDirection()));
  }
}

var site = new Site();
site.init();
