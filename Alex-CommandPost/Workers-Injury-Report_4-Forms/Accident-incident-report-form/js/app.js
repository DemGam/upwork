"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Jump to the next input in the date inputs
  const dateInputs = document.querySelectorAll(".date-input");
  if (dateInputs) {
    dateInputs.forEach((dateInput) => {
      // Ensure only numeric input is allowed
      dateInput.addEventListener("input", function () {
        dateInput.value = dateInput.value.replace(/\D/g, "");
      });
      // Move focus to the next input when the current one has  2 digits
      dateInput.addEventListener("input", function () {
        if (this.value.length >= parseInt(this.getAttribute("maxlength"), 10)) {
          let nextInput = this.nextElementSibling;
          while (nextInput && !nextInput.matches(".date-input")) {
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
