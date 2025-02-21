/**
 * Write your challenge solution here
 */
const heading=document.getElementById("mainHeading");

document.getElementById("redButton").addEventListener("click",()=>{
  heading.style.color="red";
})
document.getElementById("greenButton").addEventListener("click",()=>{
  heading.style.color="green";
})
document.getElementById("blueButton").addEventListener("click",()=>{
  heading.style.color="blue";
})
document.getElementById("purpleButton").addEventListener("click",()=>{
  heading.style.color="purple";
})
document.getElementById("resetButton").addEventListener("click",()=>{
  heading.style.color="black";
})