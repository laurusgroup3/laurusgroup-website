(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) closeNav();
  });
})();

/* LOS card lighting: switch it off while the card is off screen, so it
   costs nothing until the card is in view. */
(function () {
  var mark = document.querySelector('.los-mark-lit');
  if (!mark || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(function (entries) {
    mark.classList.toggle('is-offscreen', !entries[0].isIntersecting);
  }).observe(mark);
})();
