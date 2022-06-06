'use strict';
const openModalBtn = document.querySelectorAll('[data-open-button]')
const closeModalBtn = document.querySelector('[data-close-button]')
const modalContainer = document.querySelector('[data-modal-container]')

const closeModal = function () {
    modalContainer.classList.remove('show')
}
const openModal = function () {
    modalContainer.classList.add('show')
}
for (let i = 0; i < openModalBtn.length; i++) {
    openModalBtn[i].addEventListener('click', () => {
        openModal()
    })
}

closeModalBtn.addEventListener('click', () => {
    closeModal()
})
modalContainer.addEventListener('click', (e) => {
    if (e.target !== modalContainer) return;
    closeModal()
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
})
