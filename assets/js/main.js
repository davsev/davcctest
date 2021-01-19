
//hide top nav on scroll down and show it again on scroll up
let scrollPos = 0;
const nav = document.getElementsByTagName("header")[0];

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.remove('header-up');
  } else {
    // Scrolling DOWN
    nav.classList.add('header-up');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);