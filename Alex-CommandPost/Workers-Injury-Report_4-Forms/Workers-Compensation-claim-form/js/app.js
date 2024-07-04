"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Check if all fonts are loaded
  if (document.fonts.ready) {
    document.fonts.ready.then(connectElements);
  } else {
    // Fallback for browsers that do not support the FontFaceSet API
    window.onload = connectElements;
  }

  function connectElements() {
    const leftConnector = document.getElementById("left-connector");
    const rightConnector = document.getElementById("right-connector");
    const rightLine = document.getElementById("right-line");
    const leftLine = document.getElementById("left-line");
    let lineHeight;
    if (!leftConnector || !rightConnector || !rightLine || !leftLine) return;
    const leftConnectorTop =
      leftConnector.getBoundingClientRect().top + window.scrollY;
    const rightConnectorTop =
      rightConnector.getBoundingClientRect().top + window.scrollY;
    const [visibleLine, unvisibleLine] =
      leftConnectorTop < rightConnectorTop
        ? [leftLine, rightLine]
        : [rightLine, leftLine];
    unvisibleLine.style.height = "0";
    visibleLine.style.height = `${
      Math.abs(leftConnectorTop - rightConnectorTop) + 1
    }px`;
    leftConnector.style.backgroundColor = "#b09a28";
    rightConnector.style.backgroundColor = "#b09a28";
  }

  window.addEventListener("resize", () => {
    connectElements();
  });
});
