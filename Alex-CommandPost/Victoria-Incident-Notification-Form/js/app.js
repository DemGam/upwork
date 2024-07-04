"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Jump to the next input in the Notifier ID inputs
  const notifierIdInputs = document.querySelectorAll(".notifier-id__num");
  if (notifierIdInputs) {
    notifierIdInputs.forEach((notifierIdInput) => {
      // Ensure only numeric input is allowed
      notifierIdInput.addEventListener("input", function () {
        notifierIdInput.value = notifierIdInput.value.replace(/\D/g, "");
      });
      // Move focus to the next input when the current one has  2 digits
      notifierIdInput.addEventListener("input", function () {
        if (this.value.length >= parseInt(this.getAttribute("maxlength"), 10)) {
          let nextInput = this.nextElementSibling;
          while (nextInput && !nextInput.matches(".notifier-id__num")) {
            nextInput = nextInput.nextElementSibling;
          }
          if (nextInput) {
            nextInput.focus();
          } else {
            this.blur();
          }
        }
      });
    });
  }
});
