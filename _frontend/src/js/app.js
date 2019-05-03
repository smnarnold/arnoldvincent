import { throttle, debounce } from 'throttle-debounce';

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector('.site-header'),
      main: document.querySelector('main'),
      footer: document.querySelector('.site-footer'),
      hubSwipers: document.querySelectorAll('.js-hub-swiper'),
    };
  }

  /**
   * Methods
   */
  init() {
    this.initHubSwipers();
    this.bindEvents();
  }

  initHubSwipers() {
    for (const hub of this.dom.hubSwipers) {
      new Swiper(hub, {
        slidesPerView: 1.2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
          clickable: true,
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

  bindEvents() {
    // window.addEventListener('scroll', throttle(300, () => this.setScrollDirection()));
  }
}

var site = new Site();
site.init();
