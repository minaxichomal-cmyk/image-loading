document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("getPhotos");
  const input = document.getElementById("photoCount");
  const gallery = document.getElementById("gallery");

  btn.addEventListener("click", function () {

    gallery.innerHTML = ""; // clear old photos

    let count = parseInt(input.value);

    if (isNaN(count) || count <= 0) {
      alert("Please enter a valid number");
      return;
    }

    for (let i = 1; i <= count; i++) {
      let img = document.createElement("img");
      img.src = "https://picsum.photos/300/200?random=" + Math.random();
      img.style.margin = "10px";
      img.style.borderRadius = "10px";
      gallery.appendChild(img);
    }

  });

});
