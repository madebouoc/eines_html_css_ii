/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


import locals_es from '../locals/locals_es.json';
import locals_en from '../locals/locals_en.json';
import locals_ca from '../locals/locals_ca.json';
console.debug(locals_es.spanish.helloworld);
console.debug(locals_en.english.helloworld);
console.debug(locals_ca.catalan.helloworld);

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },}
  );

/* https://godofredo.ninja/como-detectar-un-elemento-sticky-cuando-se-queda-fijo/ */
const stickyElement = document.querySelector('#main-header');
// Opciones para el IntersectionObserver
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);
observer.observe(stickyElement);
