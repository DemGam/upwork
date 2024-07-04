"use strict";
window.addEventListener("load", function () {
  const logoTopOffset = 30; //offset for logo from top edge in px

  // Jump to the next input
  const digitInputs = document.querySelectorAll(".code-input");
  if (digitInputs) {
    digitInputs.forEach((digitInput) => {
      // Ensure only numeric input is allowed
      digitInput.addEventListener("input", function () {
        digitInput.value = digitInput.value.replace(/\D/g, "");
      });
      // Move focus to the next input when the current one has 1 digits
      digitInput.addEventListener("input", function () {
        if (this.value.length >= parseInt(this.getAttribute("maxlength"), 10)) {
          let nextInput = this.nextElementSibling;
          while (nextInput && !nextInput.matches(".code-input")) {
            nextInput = nextInput.nextElementSibling;
          }
          if (nextInput) {
            nextInput.focus();
          } else {
            this.blur();
            playAnimation();
          }
        }
      });
    });
  }

  function playAnimation() {
    const logo = document.querySelector(".logo");
    const contentBlock = document.querySelector(".content");
    if (!logo || !contentBlock) {
      return;
    }
    const initialLogoPosition = logo.getBoundingClientRect().top;
    const targetLogoPosition = logoTopOffset - initialLogoPosition;
    const transformString = `translateY(${targetLogoPosition}px)`;
    logo.style.transform = transformString;
    contentBlock.classList.add("animated");
  }
});
