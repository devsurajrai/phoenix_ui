let menuItems = document.querySelectorAll(".menu-item .component-btn");
let iframe = document.querySelector("iframe");

let activeComponentBtn = (node) => {
  menuItems.forEach((componentBtn) => {
    if (componentBtn.classList.contains("active-component-button")) {
      componentBtn.classList.remove("active-component-button");
    }
  });
  node.classList.add("active-component-button");
};

let assignPath = (node) => {
  activeComponentBtn(node);
  iframe.src = `./${node.innerHTML.toLocaleLowerCase()}/${node.innerHTML.toLocaleLowerCase()}.html`;
};
console.log(menuItems);
menuItems.forEach((node) => {
  node.addEventListener("click", () => assignPath(node));
});
