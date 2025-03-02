/**
 * Write your challenge solution here
 */

document.querySelector(".form-container").addEventListener("input", (e) => {
  if (e.target.matches("input, textarea")) {
    console.log(`${e.target.id.split("I")[0]}Display`);
    console.log(e.target.val);
    document.getElementById(`${e.target.id.split("I")[0]}Display`).textContent =
    e.target.value;
  }
});

// document.querySelector(".form-container").addEventListener("input", (e) => {
//   if (e.target.matches("input, textarea")) { // Ensure only form elements are handled
//     console.log(e.target.value);

//     let displayId = e.target.id.replace("Input", "Display"); // More reliable replacement
//     console.log(displayId);

//     let displayElement = document.getElementById(displayId);
//     if (displayElement) {
//       displayElement.textContent = e.target.value;
//     }
//   }
// });

// document.getElementById("nameInput").addEventListener("input",(e)=>{
//   document.getElementById("nameDisplay").textContent=e.target.value;
// })
// document.getElementById("jobInput").addEventListener("input",(e)=>{
//   document.getElementById("jobDisplay").textContent=e.target.value;
// })
// document.getElementById("ageInput").addEventListener("input",(e)=>{
//   document.getElementById("ageDisplay").textContent=e.target.value;
// })
// document.getElementById("bioInput").addEventListener("input",(e)=>{
//   document.getElementById("bioDisplay").textContent=e.target.value;
// })
