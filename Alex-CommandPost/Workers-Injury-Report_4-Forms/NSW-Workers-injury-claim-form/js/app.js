"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Custom SELECT
  const selectedAll = document.querySelectorAll(".select");

  if (selectedAll) {
    selectedAll.forEach((selected) => {
      const optionsList = selected.querySelectorAll("div.select .select__item");

      selected.addEventListener("click", () => {
        let arrow = selected.children[1];

        if (selected.classList.contains("is-active")) {
          handleDropdown(selected, arrow, false);
        } else {
          let currentActive = document.querySelector(".select.is-active");

          if (currentActive) {
            let anotherArrow = currentActive.children[1];
            handleDropdown(currentActive, anotherArrow, false);
          }

          handleDropdown(selected, arrow, true);
        }
      });

      // update the display of the dropdown
      for (let o of optionsList) {
        o.addEventListener("click", () => {
          selected.querySelector(".select__current").innerHTML = o.innerHTML;

          // calculate total of the row after changes in select
          let weight = document.getElementById(
            selected.getAttribute("data-attr") + "-weight"
          ).value;
          let rating = o.innerHTML;
          let total = document.getElementById(
            selected.getAttribute("data-attr") + "-total"
          );
          total.innerHTML = multiply(weight, rating);
          calculateTotal(selected.hasAttribute("data-mob"));
        });
      }
    });
  }

  // check if anything else other than the dropdown is clicked
  window.addEventListener("click", function (e) {
    if (e.target.closest(".select") === null) {
      closeAllDropdowns();
    }
  });

  // close all the dropdowns
  function closeAllDropdowns() {
    const selectedAll = document.querySelectorAll(".select");
    selectedAll.forEach((selected) => {
      let arrow = selected.children[1];

      handleDropdown(selected, arrow, false);
    });
  }

  // open all the dropdowns
  function handleDropdown(dropdown, arrow, open) {
    if (open) {
      dropdown.classList.add("is-active");
    } else {
      dropdown.classList.remove("is-active");
    }
  }
});
