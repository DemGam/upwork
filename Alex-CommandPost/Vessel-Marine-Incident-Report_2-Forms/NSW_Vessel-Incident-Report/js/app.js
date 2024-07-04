"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const eventDates = document.querySelectorAll(".event-date");

  // Function to process each.event-date container
  function processEventDate(eventDate) {
    const inputs = eventDate.querySelectorAll("input");
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        // Ensure the input value is numeric
        if (!/^\d+$/.test(input.value)) {
          input.value = "";
          return;
        }
        // Check if the input length matches the maxlength attribute
        if (input.value.length === input.maxLength) {
          if (index === inputs.length - 1) {
            input.blur();
          } else {
            const nextInput = inputs[index + 1];
            if (nextInput) {
              nextInput.focus();
            }
          }
        }
      });
    });
    const dayInput = eventDate.querySelector(".event-date__day input");
    const monthInput = eventDate.querySelector(".event-date__month input");
    const yearInput = eventDate.querySelector(".event-date__year input");

    dayInput.focus();
    monthInput.focus();
    yearInput.focus();
    yearInput.blur();
  }
  eventDates.forEach(processEventDate);
});
