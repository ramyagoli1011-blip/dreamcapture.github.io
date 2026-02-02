const images = document.querySelectorAll('.gallery img');
const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewerImage');

let currentIndex = 0;
let startX = 0;
let endX = 0;

function openViewer(index) {
  currentIndex = index;
  viewerImage.src = images[index].src;
  viewer.style.display = 'flex';
}

function closeViewer() {
  viewer.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  viewerImage.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewerImage.src = images[currentIndex].src;
}

/* Keyboard support (desktop) */
document.addEventListener('keydown', m => {
  if (viewer.style.display === 'flex') {
    if (m.key === 'ArrowRight') nextImage();
    if (m.key === 'ArrowLeft') prevImage();
    if (m.key === 'Escape') closeViewer();
  }
});

/* Touch swipe support (mobile) */
viewer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

viewer.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextImage() : prevImage();
  }
}
