const imageGrid = document.getElementById("image-grid");

// Replace the image paths below with your own images
const images = [
  "images/ai.png",
  "images/pr.png",
  "images/ps.png"
];

// Create an image element for each image and add it to the image grid
images.forEach(imagePath => {
  const img = document.createElement("img");
  img.src = imagePath;
  imageGrid.appendChild(img);
});