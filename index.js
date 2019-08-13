function FallingPhotos(elements = "#falling-photos") {
  // Saving height for when lightbox is closed
  let cacheHeight = 0;

  function showLightbox(event) {
    const element = event.target;
    const height = pixelsToViewWidth(element);

    cacheHeight = pixelsToViewWidth(element);
    element.classList.add("fallen");
    element.style.height = 0;
    element.style.marginTop = height;

    document.querySelector("#lightbox").classList.add("appear");
    document.querySelector("#lightbox img").src = element.src;
    document.querySelector("body").classList.add("show");
  }

  function hideLightbox(event) {
    // Prevents error when clicking on lightbox image
    event.stopPropagation();

    const fallenImage = document.querySelector(elements + " .fallen");

    // Reset styles
    fallenImage.style.marginTop = fallenImage.style.marginBottom;
    fallenImage.style.height = cacheHeight;
    fallenImage.classList.remove("fallen");

    // Hide lightbox
    document.querySelector("#lightbox").classList.remove("appear");
    document.querySelector("body").classList.remove("show");
  }

  /*
    Converts the width of the image from pixels to vw unit
  */
  function pixelsToViewWidth(element) {
    const decimal = element.clientHeight / window.innerWidth;
    const decimalArray = decimal.toString().split("");

    // Remove ["0", "."]
    decimalArray.splice(0, 2);

    // Put period in third position
    decimalArray.splice(2, 0, ".");
    return decimalArray.join("") + "vw";
  }

  // Can't use click here because it will read height as zero
  document
    .querySelectorAll(elements + " img")
    .forEach(image => image.addEventListener("mousedown", showLightbox));

  document.querySelectorAll("#lightbox, #lightbox img").forEach(element => {
    element.addEventListener("click", hideLightbox);
  });

  document.querySelectorAll(elements + " img").forEach(element => {
    element.style.transition = "all 0.33s";
  });
}

export default FallingPhotos;
