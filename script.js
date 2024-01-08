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

//modal kode fra chat gpt
// Get the modal element
var modal = document.getElementById("kontakt_btn");

// Get the button that opens the modal
var btn = document.getElementById("open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
