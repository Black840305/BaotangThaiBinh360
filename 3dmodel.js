// Load the model-viewer script
import "./modelData.json";

let modelViewerScript = document.createElement("script");
modelViewerScript.type = "module";
modelViewerScript.src =
  "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
document.head.appendChild(modelViewerScript);

// Create the model-viewer element
let modelViewer = document.createElement("model-viewer");
modelViewer.alt =
  "Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum";
modelViewer.src = "shared-assets/models/NeilArmstrong.glb";
modelViewer.setAttribute("ar", "");
modelViewer.setAttribute(
  "environment-image",
  "shared-assets/environments/moon_1k.hdr"
);
modelViewer.setAttribute("poster", "shared-assets/models/NeilArmstrong.webp");
modelViewer.setAttribute("shadow-intensity", "1");
modelViewer.setAttribute("camera-controls", "");
modelViewer.setAttribute("touch-action", "pan-y");

// Optional: Styling and placement
modelViewer.style.width = "100%";
modelViewer.style.height = "100%";

// Append model-viewer to a container in Pano2VR (replace 'hotspot-container' with your specific ID)
document.getElementById("hotspot-container").appendChild(modelViewer);
