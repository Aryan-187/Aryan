// script.js carosoul image
const image = [
    "./img/heroProduct.png",
    "./img/headphone13.jpg",
    "./img/headphone15.jpg"
];
let currentIndex = 0 ;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function updateImage() {
    carouselImage.src = image[currentIndex];

}
// function to move to the next image
function nextImage () {
    currentIndex = (currentIndex < image.length -1) ? currentIndex +1 : 0;
    updateImage();

}
// event listners for button
prevBtn.addEventListener("click",() =>
{
    currentIndex = (currentIndex > 0) ? currentIndex -1 : image.length -1 ;
    updateImage();
}
);
nextBtn.addEventListener("click", nextImage);
// auto move the carousel every 4 second
setInterval(nextImage, 4000);