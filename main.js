const canvas = document.getElementById("canvas");
console.log("Welcome to Ayush Rawat's page :)");
canvas.textContent = "Jai Shree Ram";
canvas.addEventListener("mouseover", (event) => {
  canvas.textContent = "Radhe Radhe";
  canvas.style.color = "purple";
});
canvas.addEventListener("mouseleave", (event) => {
  canvas.textContent = "Jai Shree Ram";
  canvas.style.color = "black";
});
