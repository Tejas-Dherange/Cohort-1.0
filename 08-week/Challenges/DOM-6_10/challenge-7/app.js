document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
        item.style.overflow = "hidden";
        item.previousElementSibling.querySelector(".arrow").textContent = "↓";
      }
    });

    content.style.overflow =
      content.style.overflow === "hidden" ? "visible" : "hidden";
    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + "px";
    button.querySelector(".arrow").textContent = content.style.maxHeight
      ? "↑"
      : "↓";
  });
});
