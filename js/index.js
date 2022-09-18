const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link')
const backontop = document.querySelector('.backontop');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backontop.style.display = "inline-block";
  } else {
    backontop.style.display = "none";
  }
}

function topFunction() {
    window.scrollTo(0, 0);
  }

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});