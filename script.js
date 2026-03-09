let images = [];
let currentIndex = 0;

window.onload = function(){

images = document.querySelectorAll(".gallery img");

}

function openImage(img){

let preview = document.getElementById("preview");
let previewImg = document.getElementById("previewImg");

preview.style.display = "flex";
previewImg.src = img.src;

currentIndex = Array.from(images).indexOf(img);

}

function closeImage(){

document.getElementById("preview").style.display = "none";

}

function nextImage(){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

document.getElementById("previewImg").src = images[currentIndex].src;

}

function prevImage(){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

document.getElementById("previewImg").src = images[currentIndex].src;

}

function goTo(page){
  window.location.href = page;
}

function goBack(){
  window.history.back();
}

