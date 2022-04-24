const modalBtn = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");
const modalInner = modal.querySelector(".modal__inner");
// create button
const modalCloseBtn = document.createElement("div");
// add style for button
modalCloseBtn.classList.add("cl-btn-7");
// add button in modal window
modalInner.prepend(modalCloseBtn);

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner");
  console.log(modalContent);
  if (!modalContent) {
    modal.style.display = "";
  }
});

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "";
});
