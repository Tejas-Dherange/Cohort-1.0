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
        second: "2-digit" ,
        hour12: true,
     });
    document.getElementsByClassName("digital-clock")[0].textContent=timeStr.toUpperCase();
    document.getElementsByClassName("date")[0].textContent=`${d.toLocaleDateString(undefined, options)}`;
      
}
setInterval(update,1000);
const clock = document.getElementsByClassName("clock")[0];


// Generate Numbers Dynamically
for (let i = 1; i <= 12; i++) {
  let number = document.createElement("div");
  number.classList.add("number");

  // Set Rotation
  let angle = (i * 29.6) * (Math.PI / 180); // Convert degrees to radians
  let x = Math.sin(angle) * 115;
  let y = -Math.cos(angle) * 125;

  number.style.transform = `translate(${x}px, ${y}px)`;
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}

// Generate Hands Dynamically 
const hands = ["hour", "minute", "second"];
for (let i = 0; i < 3; i++) {
  let hand = document.createElement("div");
  hand.classList.add("hand");
  hand.classList.add(hands[i]);
  clock.appendChild(hand);
}

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourRotation = (hours / 12) * 360 + (minutes / 60) * 30;
  let minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6;
  let secondRotation = (seconds / 60) * 360;

  document.querySelector(".hour").style.transform = `rotate(${hourRotation}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minuteRotation}deg)`;
  document.querySelector(".second").style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

