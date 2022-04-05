const unHideModalButton = document.querySelector(".modal-button-unhide");
const hideModalButton = document.querySelector(".modal-button-hide");
const modal = document.querySelector(".modal");

const handleModalUnhide = () => {
  modal.classList.remove("modal-dispay-none");
};
const handleModalHide = () => {
  modal.classList.add("modal-dispay-none");
};
unHideModalButton.addEventListener("click", handleModalUnhide);
hideModalButton.addEventListener("click", handleModalHide);
