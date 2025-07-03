// Simple Image Slider (Fade Transition)
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
    slide.style.zIndex = i === index ? "1" : "0";
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Initial state
showSlide(current);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);


// _____________

let aboutSlides = document.querySelectorAll(".about-slide");
let currentAbout = 0;

function showAboutSlide(index) {
  aboutSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextAboutSlide() {
  currentAbout = (currentAbout + 1) % aboutSlides.length;
  showAboutSlide(currentAbout);
}

showAboutSlide(currentAbout);
setInterval(nextAboutSlide, 4000); // change every 4 sec