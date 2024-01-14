let ary;
function retrieveData(ary) {
  ary = JSON.parse(localStorage.getItem("items"));

  let totalPrice = document.getElementById("cart_total");

  let total = 0;
  let parent = document.getElementById("cart");
  parent.innerText = null;

  ary.forEach((element, index) => {
    let carData = document.createElement("div");
    carData.className = "cartData";

    // image creating
    let img = document.createElement("img");
    img.src = element.image;

    // craeting Name
    let name = document.createElement("p");
    name.textContent = `${element.name}`;

    // Adding Price
    let price = document.createElement("p");
    price.textContent = `Price: ${element.price}`;

    // creating button
    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove");
    removeButton.textContent = "remove";
    removeButton.style.marginRight = "30px";
    removeButton.setAttribute("data-index", index);

    removeButton.addEventListener("click", () => {
      ary.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(ary));
      if (length <= 0) {
        totalPrice.textContent = null;
      }
      retrieveData(ary);
    });
    if (ary.length > 0) {
      total += element.price;
      totalPrice.innerHTML = `<p class="price">Total Price : ${total}</p>`;
    }

    // Data is Appending
    carData.append(img, name, price, removeButton);
    parent.appendChild(carData);
  });
}

retrieveData(ary);
