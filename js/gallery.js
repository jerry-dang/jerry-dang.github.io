document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img");
  const fullImageContainer = document.getElementById("full-image-container");
  const fullImage = document.getElementById("full-image");
  const closeImage = document.getElementById("close-image");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      fullImageContainer.style.display = "flex";
    });
  });

  closeImage.addEventListener("click", () => {
    fullImageContainer.style.display = "none";
  });

  // Optional: close the full image view when clicking outside the image
  //   fullImageContainer.addEventListener("click", (e) => {
  //     if (e.target !== fullImage && e.target !== closeImage) {
  //       fullImageContainer.style.display = "none";
  //     }
  //   });
});
