const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("id")) {
  async function getDataById() {
    const id = searchParams.get("id"); // Get ID from URL
    try {
      const response = await fetch("models.json"); // Fetch the JSON file
      const data = await response.json(); // Parse JSON

      // Find the element with the matching ID
      const item = data.find((element) => element.id === id);

      if (item) {
        // Set the model's source and update the page's text content
        const modelViewer = document.getElementById("sphere");
        modelViewer.setAttribute(
          "src",
          `./Export Glb/Export Glb/${item.model}`
        );
        document.querySelector(".name_vn").textContent = item.name;
        document.querySelector(".desc_vn").textContent = item.description;
        document.querySelector(".name_en").textContent = item.name_en;
        document.querySelector(".desc_en").textContent = item.description_en;
      } else {
        console.log("Item not found");
      }
    } catch (error) {
      console.error("Error fetching the JSON data:", error);
    }
  }
  getDataById();
}
