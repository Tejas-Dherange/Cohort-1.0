/**
 * Write your challenge solution here
 */
document.addEventListener("click", (event) => {
  const panel = document.querySelector(".panel");
  const toggleButton = document.querySelector(".toggle-btn");

  if (!panel.contains(event.target) && !toggleButton.contains(event.target)) {
    panel.style.right = "-360px";
  }
});


document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".panel").style.right = "0px";
});


document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".panel").style.right = "-360px";
});

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.innerText;
    alert(text);
  });
});
