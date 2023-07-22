function showInfo(hotspotNumber) {
    const infoContainer = document.getElementById("info-container");
    const hotspotsInfo = {
      1: "Renal Capsule",
      2: "Renal Pyramid",
      3: "Renal Artery",
      4: "Renal Vein",
      5: "Cortex",
    };
  
    infoContainer.textContent = hotspotsInfo[hotspotNumber];
    infoContainer.style.display = "block";
  }
  