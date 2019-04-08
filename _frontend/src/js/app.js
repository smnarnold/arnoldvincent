import { throttle, debounce } from "throttle-debounce";

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector(".site-header"),
      main: document.querySelector("main"),
      footer: document.querySelector(".site-footer")
    };

    this.previousScrollY = 0;
  }

  /**
   * Methods
   */
  init() {
    this.bindEvents();
    this.setFooter();
  }

  bindEvents() {
    window.addEventListener(
      "scroll",
      throttle(300, () => this.setScrollDirection())
    );
    window.addEventListener("resize", debounce(300, () => this.setFooter()));
  }

  setScrollDirection() {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollingDown = scrollY > this.previousScrollY ? true : false;

    document.documentElement.classList.toggle(
      "is-scrolling-down",
      isScrollingDown
    );
    document.documentElement.classList.toggle(
      "is-scrolling-up",
      !isScrollingDown
    );
    this.previousScrollY = scrollY <= 0 ? 0 : scrollY;
  }

  setFooter() {
    this.dom.main.style.marginBottom = `${this.dom.footer.offsetHeight}px`;
  }
}

var site = new Site();
site.init();
