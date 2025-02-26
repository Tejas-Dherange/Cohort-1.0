// /**
//  * Write your challenge solution here
//  */
const bg = document.getElementById('body');
const bulbbg = document.getElementById('bulb');
const tgbtn = document.getElementById('toggleButton');
const status = document.getElementById('status');

let blk = true;
// function handleclick() {
//   if (blk) {
//     bg.style.backgroundColor = 'white';
//     bg.style.color = 'black';
//     bulbbg.style.backgroundColor="yellow";
//     tgbtn.textContent="Turn off";
//     status.textContent="Status: On";
//     blk = false;
//   } else {
//     bulbbg.style.backgroundColor="white";
//     bg.style.backgroundColor = 'black';
//     bg.style.color = 'white';
//     tgbtn.textContent="Turn on";
//     status.textContent="Status: Off";
//     blk = true;
//   }
// }
bg.className=`${bg.classList}, dark-mode`;

function handleclick(){
  if(blk){
   bg.classList.toggle("dark-mode");
   bulbbg.style.backgroundColor="yellow"
   tgbtn.textContent="Turn off";
   status.textContent="Status: On";
   blk=!blk;
  }else{
    // bg.className=`dark-mode`;
    bg.classList.toggle("dark-mode");
    bulbbg.style.backgroundColor="#95a5a6"
    tgbtn.textContent="Turn on";
    status.textContent="Status: off";
    blk=!blk;
  }
}