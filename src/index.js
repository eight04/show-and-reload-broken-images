/* eslint-env browser, greasemonkey */

function reloadImages() {
  for (const img of document.images) {
    if (!img.complete || img.matches("[src]:-moz-broken")) {
      img.src += "#";
    }
  }
}

function broadcastEvent() {
  for (const win of window.frames) {
    win.postMessage("RELOAD_BROKEN_IMAGES", "*");
  }
}

function init() {
  window.addEventListener("keyup", e => {
    if (e.keyCode === 82 && e.altKey) {
      reloadImages();
      broadcastEvent();
    }
  });
  
  window.addEventListener("message", e => {
    if (e.data === "RELOAD_BROKEN_IMAGES") {
      reloadImages();
      broadcastEvent();
    }
  });
}

if (process.env.BUILD === "bookmarklet") {
  reloadImages();
} else {
  init();
}
