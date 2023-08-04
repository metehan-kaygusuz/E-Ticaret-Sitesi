let MenuItems = document.getElementById("MenuItems");
      MenuItems.style.maxHeight = "0px";

      function menutoggle() {
        if (MenuItems.style.maxHeight == "0px") {
          MenuItems.style.maxHeight = "200px";
        } else {
          MenuItems.style.maxHeight = "0px";
        }
      }


    //   let ProductImg = document.getElementById("ProductImg");
    //   let SmallImg = document.getElementsByClassName("small-img");

    //   SmallImg[0].onclick = function () {
    //     ProductImg.src = SmallImg[0].src;
    //   };
    //   SmallImg[1].onclick = function () {
    //     ProductImg.src = SmallImg[1].src;
    //   };
    //   SmallImg[2].onclick = function () {
    //     ProductImg.src = SmallImg[2].src;
    //   };
    //   SmallImg[3].onclick = function () {
    //     ProductImg.src = SmallImg[3].src;
    //   };


      let carts= document.querySelectorAll(".add-cart");
      
      for(let i=0; i<carts.length; i++){
        carts[i].addEventListener("click", ()=>{
            cartNumbers();
        })
      }

      function cartNumbers(){
        let productNumbers = localStorage.getItem("cartNumbers")
        console.log(productNumbers)
        localStorage.setItem("cartNumbers",1)
      }

