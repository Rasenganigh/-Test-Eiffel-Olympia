const folderId = "1b2lHWBWhgUMiIUdkguNUGHgnj6atVm28";
const apiKey = "AIzaSyDdd5xbGoLbfB69avAo3_QA-zaEyDrtRfQ";

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name)`)
  .then(res => res.json())
  .then(data => {
    data.files.forEach(file => {
      const img = document.createElement("img");
      img.src = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;
      img.alt = file.name;

      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });

      gallery.appendChild(img);
    });
  });

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
