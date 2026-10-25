function contactTelegram() {
    window.open("https://t.me/lysivjing", "_blank");
}

const categoryTabs = document.querySelectorAll(".category-tab");
const productCards = document.querySelectorAll(".product-card");

categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    categoryTabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    productCards.forEach(product => {
      if (
        selectedCategory === "all" ||
        product.dataset.category === selectedCategory
      ) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
