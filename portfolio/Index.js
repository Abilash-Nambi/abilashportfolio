AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease-out-cubic", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

/* TYPEWRITING EFFECT */

/* let title = document.getElementById("Typewriter");
let name = "ABILASH N...";
let index = 0;

const Typewriter = () => {
  let newName = name.slice(0, index);
  title.innerHTML = newName;
  index > name.length ? (index = 0) : index++;
};

setInterval(Typewriter, 200);
 */
var Typed = new Typed("#Typewriter", {
  strings: ["Front-End React Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 150) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
