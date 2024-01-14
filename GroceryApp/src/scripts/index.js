// The items should be stored in local storage with key :- “items”
let groceryItems = async () => {
    let res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`
    );
    let data = await res.json();
    // console.log(data);
    displayItems(data);
  };
  groceryItems();
  let inc = 0;
  let aryData = [];
  function displayItems(el) {
  
    //   return carData;
    el.data.map((el) => {
      let parent = document.getElementById("items");
  
      let carData = document.createElement("div");
      carData.classList.add("cartData")
    //   carData.style.border = "2px solid green";
    //   carData.style.width = "30%";
    //   carData.style.margin = "auto";
    //   carData.style.marginBottom = "20px";
    //   carData.style.textAlign = "center";
    //   carData.style.padding = "20px";
      // image creating
      let img = document.createElement("img");
      img.src = el.image;
    //   img.style.width = "250px";
  
      let name = document.createElement("p");
      name.textContent = `${el.name}`;
  
      let price = document.createElement("p");
      price.textContent = `Price: ${el.price}`;
  
      let addButton = document.createElement("button");
      addButton.textContent = "Add Cart";
      addButton.setAttribute('class',"add_to_cart")
  
      carData.append(img, name, price, addButton);
  
      addButton.addEventListener("click", () => {
        let item_count = document.getElementById("item_count");
        // console.log(el,+item_count.textContent);
        inc++;
        console.log(inc);
        item_count.innerText = inc;
        aryData.push(el);
        let localData = localStorage.getItem("items") || [];
        localStorage.setItem("items", JSON.stringify(aryData));
        console.log(aryData);
      });
      parent.appendChild(carData);
    });
  }
  
  // function iterateItem(data) {
  //   // console.log(data);
  //   let parent = document.getElementById("items");
  //   let ary = data.data;
  //   // data.then((res)=>{})
  //   ary.forEach((element) => {
  //     let result = displayItems(element);
  //     parent.appendChild(result);
  //   });
  // }
  