/**
 * Write your challenge solution here
 */

function update(){
    const d=new Date();
    const options = { 
        weekday: "long", 
        day: "2-digit", 
        month: "long", 
        year: "numeric" 
      };
    const timeStr = d.toLocaleTimeString("en-GB", { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
    });
    document.getElementsByClassName("digital-clock")[0].textContent=timeStr;
    document.getElementsByClassName("date")[0].textContent=`${d.toLocaleDateString("en-GB", options)}`;
      
}
setInterval(update,1000);
const clock = document.getElementsByClassName("clock")[0];

// Generate Numbers Dynamically
for (let i = 1; i <= 12; i++) {
  let number = document.createElement("div");
  number.classList.add("number");

  // Set Rotation
  let angle = (i * 30) * (Math.PI / 180); // Convert degrees to radians
  let x = Math.sin(angle) * 100;
  let y = -Math.cos(angle) * 100;

  number.style.transform = `translate(${x}px, ${y}px)`;
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}
