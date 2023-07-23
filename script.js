import hotspotsInfo from "./hotspotsInfo.js";

function showInfo(hotspotNumber) {
  const infoContainer = document.getElementById("info-container");
  const infoTitle = document.getElementById("info-title");
  const infoDescription = document.getElementById("info-description");
  const infoImage = document.getElementById("info-image");
  console.log(infoContainer, infoTitle, infoDescription, infoImage);
  infoTitle.innerHTML = hotspotsInfo[hotspotNumber].title;
  infoDescription.innerHTML = hotspotsInfo[hotspotNumber].description;
  infoImage.src = hotspotsInfo[hotspotNumber].imageLink;
  infoContainer.style.display = "block";
  console.log(infoContainer, infoTitle, infoDescription, infoImage);
}

const imgContainer = document.getElementsByClassName("image-container")[0];

const img = document.createElement("img");
img.src = "images/kidney.png";
img.className = "kidney";
img.alt = "Interactive Image";
img.id = "interactive-image";

imgContainer.appendChild(img);

const hotspotStyles = [
  "top: 38px; left: 185px;",
  "top: 145px; left: 200px;",
  "top: 240px; left: 400px;",
  "top: 300px; left: 420px;",
  "top: 480px; left: 185px;"
];

for(let i = 0; i < 5; i++) {
  console.log(i);
  const hotspot = document.createElement("div");
  hotspot.className = "hotspot";
  hotspot.style = hotspotStyles[i];
  hotspot.addEventListener('click', () => showInfo(i + 1));
  imgContainer.appendChild(hotspot);
}
console.log(imgContainer);
