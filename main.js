let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
  menuicon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sec.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');

    if (top >= offset && top < offset + height) {
      links.forEach(l => {
        l.classList.remove('active');
      });

      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuicon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

const form = document.querySelector('.contactFormBox');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', e => {
  e.preventDefault();

  popup.style.display = "flex"; // show center popup

  form.reset(); // clear form
});

closePopup.addEventListener('click', () => {
  popup.style.display = "none"; // hide popup
});







