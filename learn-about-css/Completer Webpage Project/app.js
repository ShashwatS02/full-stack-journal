// Sidemen Showcase JavaScript
// This file is kept minimal as per requirements to use only HTML and CSS
// Bootstrap handles carousel functionality automatically

document.addEventListener("DOMContentLoaded", function () {
  // Basic initialization - Bootstrap carousel runs automatically
  console.log("Sidemen Showcase loaded successfully!");

  // Ensure carousel images load properly
  const carouselImages = document.querySelectorAll(".carousel-image");
  carouselImages.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });
    img.addEventListener("error", function () {
      console.warn("Failed to load carousel image:", this.src);
    });
  });

  // Ensure card images load properly
  const cardImages = document.querySelectorAll(".card-img-top");
  cardImages.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });
    img.addEventListener("error", function () {
      console.warn("Failed to load card image:", this.src);
    });
  });

  // Optional: Add any future interactive features here
  // Currently all functionality is handled by Bootstrap and CSS
});

// Future functionality can be added here as needed
