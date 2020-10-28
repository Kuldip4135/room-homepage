const slides = [
  {
    id: 1,
    img: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    info:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    img: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    info:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    info:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const sliderImg = document.querySelector(".slider-img");
const sliderTitle = document.querySelector(".slider-title");
const sliderInfo = document.querySelector(".slider-info");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

let currentSlide = 0;
window.addEventListener("DOMContentLoaded", () => {
  showSlide();
});

const showSlide = () => {
  const slide = slides[currentSlide];
  sliderImg.src = slide.img;
  sliderTitle.textContent = slide.title;
  sliderInfo.textContent = slide.info;
};

//Show next slide.
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
});

//Show prev slide.
prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

//Navbar
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navList = document.querySelector(".nav-list");
const slider = document.querySelector(".slider");

openMenu.addEventListener("click", () => {
  navList.classList.add("active");
  slider.classList.add("nav-active");
});

closeMenu.addEventListener("click", () => {
  navList.classList.remove("active");
  slider.classList.remove("nav-active");
});
