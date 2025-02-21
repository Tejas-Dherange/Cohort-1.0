/**
 * Write your challenge solution here
 */
document.getElementById("nameInput").addEventListener("input",(e)=>{
  document.getElementById("nameDisplay").textContent=e.target.value;
})
document.getElementById("jobInput").addEventListener("input",(e)=>{
  document.getElementById("jobDisplay").textContent=e.target.value;
})
document.getElementById("ageInput").addEventListener("input",(e)=>{
  document.getElementById("ageDisplay").textContent=e.target.value;
})
document.getElementById("bioInput").addEventListener("input",(e)=>{
  document.getElementById("bioDisplay").textContent=e.target.value;
})