import {hotspotsInfo, hotspotStyles} from "./data.js";

function showInfo(hotspotNumber) {
  for(let i = 1; i < 6; i++) {
    const hotspot = document.getElementsByClassName("hotspot")[i - 1];
    if(i === hotspotNumber) {
      hotspot.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      hotspot.style.border = "2px solid white";
    } else {
      hotspot.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      hotspot.style.border = "2px solid black";
    }
  }
  const infoContainer = document.getElementById("info-container");
  infoContainer.innerHTML = `
      <div class="label-box" >
        <div class="zoomed-img">
          <img src="${hotspotsInfo[hotspotNumber].imageLink}" alt="" id="info-image">
        </div>
        <article class="label-body">
          <span><h3 id="info-title">${hotspotsInfo[hotspotNumber].title}</h3></span>
          <span><p id="info-description">${hotspotsInfo[hotspotNumber].description}</p></span>
        </article>
      </div>
  `;
  infoContainer.addEventListener('click', () => {
    loadBottom(hotspotNumber);
  });
}
function loadBottom(hotspotNumber) {
  const possibleDiseases = hotspotsInfo[hotspotNumber].diseases.split(', ');
  const kidneyContainerBottom = document.getElementById('kidney-container-bottom');
  kidneyContainerBottom.innerHTML = `
    <div class="kidney-left kidney-bottom">
      <img src="${hotspotsInfo[hotspotNumber].imageLink}" alt="">
    </div>
    <div class="kidney-right">
      <div class="group">
        <h1>${hotspotsInfo[hotspotNumber].title}</h1>
        <h3>Description</h3>
      </div>
      <div class="group">
        <p>${hotspotsInfo[hotspotNumber].description}</p>
        <h3>Function</h3>
      </div>
      <div class="group">
        <p>${hotspotsInfo[hotspotNumber].function}</p>
        <h3 id="diseases">Possible Diseases</h3>
      </div>

    </div>
  `;
  const diseases = document.getElementById('diseases');
  for(const disease of possibleDiseases) {
    const diseaseElement = document.createElement('li');
    diseaseElement.style = "font-weight: 500; font-size: 1.2rem;";
    diseaseElement.innerHTML = disease;
    diseases.appendChild(diseaseElement);
  }
}

const imgContainer = document.getElementsByClassName("image-container")[0];

const img = document.createElement("img");
img.src = "images/kidney.png";
img.className = "kidney";

imgContainer.appendChild(img);


for(let i = 0; i < 5; i++) {
  console.log(i);
  const hotspot = document.createElement("div");
  hotspot.className = "hotspot";
  hotspot.style = hotspotStyles[i];
  hotspot.addEventListener('click', () => showInfo(i + 1));
  imgContainer.appendChild(hotspot);
}
console.log(imgContainer);
