const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

$(document).ready(function () {
  // Initialize Slick Carousel
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "60px", // Adjust this value for the scale
    slidesToShow: 3, // Number of slides to show at once
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
    // Additional settings or customization can be added here
  });

  // Click event handlers for custom buttons
  $(".prev-btn").click(function () {
    $(".carousel").slick("slickPrev"); // Go to previous slide
  });

  $(".next-btn").click(function () {
    $(".carousel").slick("slickNext"); // Go to next slide
  });
});
