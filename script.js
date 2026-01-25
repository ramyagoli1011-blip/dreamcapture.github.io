const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let interval;
let startX = 0;

/* Create dots */
images.forEach((img, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
    resetAutoSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  interval = setInterval(() => {
    index = (index + 1) % images.length;
    updateSlider();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(interval);
  autoSlide();
}

/* Touch swipe support */
slides.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    index = (index + 1) % images.length;
  } else if (endX - startX > 50) {
    index = (index - 1 + images.length) % images.length;
  }

  updateSlider();
  resetAutoSlide();
});

autoSlide();
