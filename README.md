# Falling Photos

## Usage

### HTML

```
<div id="lightbox">
  <img src="#">
</div>

<div id="falling-photos">
  <img src="imagesource.jpg">
  <img src="imagesource.jpg">
  <img src="imagesource.jpg">
</div>
```

### JavaScript

```
import FallingPhotos from "fallingPhotos";

new FallingPhotos()
```

### CSS

```
body:before {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: 999;
  background: #fff;
  pointer-events: none;
  transition: opacity 0.5s;
  position: fixed;
}

body.show:before {
  opacity: 1;
}

body.show {
  height: 100%;
  overflow: hidden;
}
```

Make sure to set a width and height for img elements inside of `#falling-photos` as well.
