
function setUpEvents(){
  let scrollPos = 0;
  const header = document.getElementsByTagName("header")[0];

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      // Scrolling UP
      header.classList.remove('header-up');
    } else {
      // Scrolling DOWN
      header.classList.add('header-up');
    }
    scrollPos = windowY;
  }

  window.addEventListener('scroll', checkPosition);




  const nav = document.querySelector(".topnav__menu"),
    navToggle = document.querySelector(".topnav__bars");
    if (navToggle) {
      navToggle.addEventListener("click",
      function(e) {
      console.log('dav');
      if (nav.classList.contains('open')){
        nav.classList.remove('open');
      } else {
        nav.classList.add('open');
      }
      e.preventDefault();
      }, false);
    }

    /* Any click outside of the nav element will close the menu if it's open */
    var specifiedElement = document.querySelector('.topnav__menu');
    document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside && nav.className == "open") {
        nav.className = "";
      } 
    });

}




//hide top nav on scroll down and show it again on scroll up


window.onload = function(){
  setUpEvents();
}
