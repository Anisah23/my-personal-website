 console.log("Script is running"); 
  
  document.querySelectorAll('.page').forEach(section => {
  section.addEventListener('mouseenter', () => {
    console.log(`You entered section: ${section.id}`);
  });
});
const img = document.getElementById("image");

img.addEventListener("mouseenter", () => {
  img.style.filter = "brightness(1.2)";
});

img.addEventListener("mouseleave", () => {
  img.style.filter = "brightness(0.8)";
});
