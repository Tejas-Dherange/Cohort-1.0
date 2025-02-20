let rating=0;
function setReview(val){
    console.log(val);
    rating=val;
    for(i = val; i > 0; i--){
        document.getElementById(`${i}`).src = './assets/starfill.svg'
    }
    for(i=val+1; i <=5; i++){
        document.getElementById(`${i}`).src = './assets/star.svg'
    }
}


function handleClick(){

    const title=document.getElementById("title");
    const desc=document.getElementById("userInput");
    const Stars=document.createElement("div");
    let htmlContent = ""; 
    for (let i = 0; i < rating; i++) {
        htmlContent+=`
        <img src="./assets/starfill.svg" alt="">
        `
        
    }
    console.log(title,desc,rating);
    const div=document.createElement("div");
    div.innerHTML=`
     <div class="border m-3 p-4 rounded-lg  bg-gray-400">
          <h2>${title.value}</h2>
          <p>${desc.value}</p>
          <span class="flex gap-1">${htmlContent}</span>
        </div>
    `;
    const right=document.getElementsByClassName("output")[0];
    right.appendChild(div);

    title.value="";
    desc.value="";
    for(i = rating; i > 0; i--){
        document.getElementById(`${i}`).src = './assets/star.svg'
    }

}


function displayStar() {
    let inner="";
    for (let i = 1; i <=5; i++) {
       inner+=`
      <img
            src="./assets/star.svg"
            height="50"
            width="50"
            id="${i}"
            onclick="setReview(${i})"
          />
       `
    }
    document.getElementById("star").innerHTML=inner;
}
displayStar();