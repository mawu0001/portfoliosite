document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const images = slides.getElementsByTagName("img");
  let currentSlide = 0;

  function showSlide(n) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[n].style.display = "block";
  }

  function prevSlide() {
    if (currentSlide === 0) {
      currentSlide = images.length - 1;
    } else {
      currentSlide--;
    }
    showSlide(currentSlide);
  }

  function nextSlide() {
    if (currentSlide === images.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlide(currentSlide);
  }

  document.querySelector(".prevBtn").addEventListener("click", prevSlide);
  document.querySelector(".nextBtn").addEventListener("click", nextSlide);

  // Show the first slide initially
  showSlide(currentSlide);
});
