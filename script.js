"use strict";

//////////////////////////////////

const iconsBtn = document.querySelectorAll(".icon");
const itemElement = document.querySelectorAll(".item");

for (let i = 0; i < iconsBtn.length; i++) {
  iconsBtn[i].addEventListener("click", function (e) {
    for (let j = 0; j < itemElement.length; j++) {
      itemElement[i].classList.toggle("open");
      iconsBtn[i].classList.toggle("arrow");
    }
  });
}
