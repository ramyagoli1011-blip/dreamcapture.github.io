const imageSets = {
  wedding: [
    "images/wedding1.jpg",
    "images/wedding2.jpg"
  ],
  birthday: [
    "images/birthday1.jpg",
    "images/birthday2.jpg"
  ],
  portrait: [
    "images/portrait1.jpg",
    "images/portrait2.jpg"
  ]
};

let currentIndex = 0;
let sliderInterval;
let startX = 0;

function openSlider(type) {
  document.getElementById("mainGallery").style.display = "none";
  document.getElementById("sliderPage").classList.remove("hidden");

  const slider = document.getElementById("slider");
  slider.innerHTML = "";

  imageSets[type].forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    slider.appendChild(image);
  });

  currentIndex = 0;
  startAutoSlide();
  addTouch(slider);
}

function goBack() {
  clearInterval(sliderInterval);
  document.getElementById("sliderPage").classList.add("hidden");
  document.getElementById("mainGallery").style.display = "flex";
}

function startAutoSlide() {
  sliderInterval = setInterval(() => {
    slideNext();
  }, 3000);
}

function slideNext() {
  const slider = document.getElementById("slider");
  currentIndex = (currentIndex + 1) % slider.children.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Touch Support */
function addTouch(slider) {
  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) slideNext();
    if (endX - startX > 50) {
      currentIndex =
        (currentIndex - 1 + slider.children.length) %
        slider.children.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });
}
