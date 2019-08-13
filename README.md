# Falling Photos

Demo: https://codepen.io/oxideorcoal/pen/vYBLjjq

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
#lightbox {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100vh;
  position: fixed;
  transition: all 0.5s;
  z-index: -1;
  opacity: 0;

  img {
    max-width: 100%;
    border-radius: 10px;
    max-height: 100%;
    height: auto;
    transition: height 0.5s, width 0.5s;
  }

  &.appear {
    top: 0;
    z-index: 3;
    opacity: 1;
  }
}

body:before {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: 2;
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
