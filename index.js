function FallingPhoto(child, parent = "#falling-photos") {
  // Saving height of opened element for when lightbox is closed
  let cacheHeight = 0;

  function showLightbox(event) {
    const slicedChild = child.slice(1, child.length);
    const foundChild = findChild(event.target, slicedChild);

    cacheHeight = pixelsToViewWidth(foundChild);
    foundChild.classList.add("fallen");
    foundChild.style.height = cacheHeight;
    foundChild.style.height = 0;
    foundChild.style.marginTop = cacheHeight;

    document.querySelector("#lightbox").classList.add("appear");
    document.querySelector("#lightbox img").src = foundChild.src;
    document.querySelector("body").classList.add("show");
  }

  function hideLightbox(event) {
    // Prevents error when clicking on lightbox image
    event.stopPropagation();

    const fallenImage = document.querySelector(parent + " .fallen");

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

  function findChild(target, slicedChild) {
    if (target.classList.contains(slicedChild)) {
      return target;
    } else {
      return findChild(target.parentElement, slicedChild);
    }
  }

  // Can't use click here because it will read height as zero
  document
    .querySelectorAll(parent + " " + child)
    .forEach(image => image.addEventListener("mousedown", showLightbox));

  document.querySelectorAll("#lightbox, #lightbox img").forEach(element => {
    element.addEventListener("click", hideLightbox);
  });

  document.querySelectorAll(parent + " " + child).forEach(element => {
    element.style.transition = "all 0.33s";
    element.style.height = pixelsToViewWidth(element);
  });
}

export default FallingPhoto;
