console.log("hello");

const btns = document.getElementById("buttons");
const display=document.getElementById("display");
function handleInput(value){
  if(value==="="){
      display.value=eval(display.value);

  }else if(value==="AC"){
      
      display.value="";
  }else if(value=="C"){
    
      display.value=(display.value).substring(0,display.value.length-1);
  }
  else{
      display.value+=value;

  }
}
const arr = [
    "AC","C",
    "/", "1","2", "3",  
    "*","4", "5", "6","-",
    "7", "8", "9", "+", 
    "0", ".", "="
];

 arr.forEach(value => {
    if(value==="AC" || value==="0"){
        const btn=document.createElement("div");
      btn.className="cursor-pointer sm:min-w-[50px] bg-orange-600  text-white sm:min-h-[50px] col-span-2  border flex items-center justify-center font-bold text-2xl md:p-4 bg-gray-200 rounded-lg hover:bg-orange-900 transition";
      btn.innerText = value;
      btn.onclick= ()=> handleInput(value);
      btns.appendChild(btn)
    }else{

        const btn=document.createElement("div");
        btn.className="cursor-pointer sm:min-w-[60px] text-orange-600 sm:min-h-[60px]  border flex items-center justify-center font-bold text-2xl md:p-4 bg-white rounded-lg hover:bg-gray-300 transition";
        btn.innerText = value;
        btn.onclick= ()=> handleInput(value);
        btns.appendChild(btn)
    }
  });
  
