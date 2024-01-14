function placeOrder(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let address = document.getElementById("address");
    let msg = document.getElementById('order-message');
    let form = document.querySelector('form')
    console.log("Placed");
    msg.textContent=`Your order is successfully placed`;

    let ary = JSON.parse(localStorage.getItem('items'));
    ary.splice(0,ary.length);

    localStorage.setItem("items",JSON.stringify(ary))
    name.value=""
    number.value=""
    address.value=""
   
}


let placeButton = document.getElementById("place-order");

placeButton.addEventListener('click',placeOrder);