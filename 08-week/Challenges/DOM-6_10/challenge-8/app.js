let cart={};
let total=0;
function addToCart(name,price){
    if(cart[name]){
        cart[name].quantity+=1;
        
    }else{
        cart[name]={quantity:1,price:price}; 
        const item=document.createElement("div");
        item.className="cart-item";
        item.innerHTML=`
        <div>${name}</div>

        <div>
        <button class="sub" data-name="${name}">-</button>
        <span class="quantity-${name}">1</span>
        <button class="add" data-name="${name}">+</button>
        <span class="price-${name}">${price}</span>
        <button class="remove" data-name="${name}">Remove</button>
        </div>
        `;
        document.getElementsByClassName("empty-cart")[0].innerHTML="";
        document.getElementById("cart-items").appendChild(item);
    }
    updateCart();
}


document.getElementById("cart-items").addEventListener("click",(event)=>{
    const name=event.target.getAttribute("data-name");

    if(!name) return;
    if(event.target.classList.contains("add")){
        cart[name].quantity+=1;
    }else if(event.target.classList.contains("sub")){
        cart[name].quantity=Math.max(1,cart[name].quantity-1);
    }else if(event.target.classList.contains("remove")){
      delete cart[name];
      event.target.parentElement.parentElement.remove();
     
    }
    updateCart();
})


function updateCart(){
    total = 0; // Reset total before recalculating
    for (let item in cart) {
        let itemTotal = cart[item].quantity * cart[item].price;
        total += itemTotal;
        
        document.querySelector(`.quantity-${item}`).textContent = cart[item].quantity;
        document.querySelector(`.price-${item}`).textContent = itemTotal.toFixed(2);
    }
    document.querySelector("#cart-total h3").textContent=`Total: $ ${total.toFixed(2)}`;
}