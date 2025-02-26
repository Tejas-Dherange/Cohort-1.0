/**
 * Write your challenge solution here
 */
const heading = document.getElementById("mainHeading");
const buttonArea = document.querySelector(".color-buttons");

buttonArea.addEventListener("click", (e) => {
  let str = e.target.id.split("B");
  console.log(str[0]);
  if (str[0] === "reset") {
    heading.style.color = "black";
  }
  heading.style.color = str[0];
});

// document.getElementById("redButton").addEventListener("click",()=>{
//   heading.style.color="red";
// })
// document.getElementById("greenButton").addEventListener("click",()=>{
//   heading.style.color="green";
// })
// document.getElementById("blueButton").addEventListener("click",()=>{
//   heading.style.color="blue";
// })
// document.getElementById("purpleButton").addEventListener("click",()=>{
//   heading.style.color="purple";
// })
// document.getElementById("resetButton").addEventListener("click",()=>{
//   heading.style.color="black";
// })
