

const arr = ["🐶", "🐱", "🐰", "🐵", "🐶", "🐱", "🐰", "🐵", "🐸", "🐼", "🦁", "🦊", "🐸", "🐼", "🦁", "🦊"];
arr.sort(() => Math.random() - 0.5);



const container = document.getElementById("gameContainer");
for (let i = 0; i < 16; i++) {

  const div1 = document.createElement("div");

  div1.className = "card";
  div1.innerHTML = `
  <div class="card-front"> ?</div>
  <div class="card-back" id="emoji">${arr[i ]}</div>
  `;
  container.appendChild(div1);
  // console.log(container);
}

const options={
  i:"2 digit"
}

let flip = 0;
let card1, card2;
let emoji1, emoji2;
let moves = 0;
let i = 0;
let j = 1;
let k = 0;

function timer() {
  setInterval(() => {
    if (j % 60 == 0) {
      i++;
      j = 0;
    }
    document.getElementById(
      "time"
    ).textContent = `${i} : ${j.toString().padStart(2, '0')}`;
    j += 1;
  }, 1000);
}


let isChecking = false;

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (k == 0) {
      timer();
      k = 1;
    } 
    if (isChecking) return;
    if (!card.classList.contains("flipped")) {
      card.classList.toggle("flipped");
      if (flip == 0) {
        emoji1 = card.querySelector(".card-back").textContent.trim();
        card1 = e.target.closest(".card");
        flip++;

        console.log(emoji1);
      } else if (flip === 1 && card !== card1) {
        emoji2 = card.querySelector(".card-back").textContent.trim();
        card2 = e.target.closest(".card");
        console.log(card2);
        console.log(emoji2);
        flip++;
        if (emoji1 !== emoji2) {
          isChecking = true;
          setTimeout(() => {
            card1.classList.toggle("flipped");
            card2.classList.toggle("flipped");
            flip = 0;
            isChecking = false;
          }, 800);
        } else {
          moves++;
          flip = 0;
        }
      }
      console.log(moves);
      document.getElementById("moves").innerText = `${moves}`;
      if (moves === 8) {
        setTimeout(()=>{

          alert("Game completed");
          restartGame();
        },1000)
      }
    }
  });
});

function restartGame() {
  window.location.reload();
}
