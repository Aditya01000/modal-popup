"use strict";
const openModalBtn = document.querySelector("[data-open-button]");
const modalContainer = document.querySelector("[data-modal-container]");

const closeModal = function () {
  modalContainer.classList.remove("show");
};
const openModal = function () {
  modalContainer.classList.add("show");
};

openModalBtn.addEventListener("click", () => {
  openModal();
});
modalContainer.addEventListener("click", (e) => {
  if (e.target !== modalContainer) return;
  closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
