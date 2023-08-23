"use strict";

const btnsOpenModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const modals = document.querySelectorAll(".modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");

function showModal(i) {
  modals[i].classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(j) {
  modals[j].classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    showModal(i);
  });
}

for (let j = 0; j < btnsCloseModal.length; j++) {
  btnsCloseModal[j].addEventListener("click", function () {
    closeModal(j);
  });
}

document.addEventListener("keydown", function (e) {
  for (let k = 0; k < modals.length; k++) {
    if (e.key === "Escape" && !modals[k].classList.contains("hidden")) {
      closeModal(k);
    }
  }
});

/*
 MUST FIX ON NEXT UPDATE:
 1. After opening a few modals, the previous ones does not close automatically.
 */
