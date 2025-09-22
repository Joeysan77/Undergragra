function up() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "0px"
    container.style.paddingTop = "90px"
    navig.style.transform = "rotateX(0deg)"
}

function down() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "-100px"
    container.style.paddingTop = "20px"
    navig.style.transform = "rotateX(180deg)"
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    
    up()
    
  } else {
    down()
      }
  prevScrollpos = currentScrollPos;
}
x = 1
function nn() {
    if (x == 1) {
        down()
        x = 0
    }
    else if (x == 0) {
        up()
        x = 1
    }
}


let crt = 0;


function update_cart(button) {
    const cart = document.getElementById("cart");
    const catt = document.getElementById("catt");
    const checkbtn = document.getElementById("checkbtn");

    // Animate cart
    cart.style.transform = "scale(1.2)";
    cart.style.background = "#00862f";
    setTimeout(() => {
        cart.style.transform = "scale(1)";
        cart.style.background = "#0866ff";
    }, 300);

    if (button.value === "add") {
        // Add item
        button.style.background = "#EF5E16";
        button.innerHTML = "Remove <i class='far fa-cart-xmark'></i>";
        button.value = "remove";
        button.style.padding = "10px 15px";

        checkbtn.style.background = "rgb(0,134,47)";
        checkbtn.style.color = "white";

        crt += 1;
        addToCart(button);

        // Remove empty cart message if it exists
        const emptyDiv = document.getElementById("empt");
        if (emptyDiv) emptyDiv.remove();

    } else if (button.value === "remove") {
        // Remove item
        const id = button.dataset.id;
        const carti = catt.querySelector(`.carti[data-id="${id}"]`);

        if (carti) {
            removeCartItem(carti); // safely remove cart item
        } else {
            // If item not found, just reset the button
            resetButton(button);
        }
    }
}

function addToCart(button) {
    const catt = document.getElementById("catt");

    const carti = document.createElement("div");
    carti.className = "carti";
    carti.dataset.id = button.dataset.id;
    carti._linkedButton = button; // link button for easy reset

    carti.innerHTML = `
        <div class="carti1">
            <img src="${button.dataset.img}" alt="" class="cartimg"> 
            <div class="carti12">
                <p class="pi1">${button.dataset.title}</p>
                <p class="pi2">${button.dataset.desc}</p>
            </div>
        </div>
        <div class="carti2">
            <p class="cartip"><i class="fa fa-naira-sign cartin"></i>${button.dataset.price || 0}</p>
        </div>
        <div class="carti3">
            <i class="fa fa-trash catrash"></i>
        </div>
    `;

    catt.appendChild(carti);

    // Trash button removes this item
    carti.querySelector(".catrash").onclick = () => removeCartItem(carti);
}

function removeCartItem(carti) {
    if (!carti) return;

    const linkedBtn = carti._linkedButton;

    // Animate removal
    carti.style.opacity = "0";
    carti.style.height = "0";
    carti.style.padding = "0";
    carti.style.margin = "0 0 0 5%";

    setTimeout(() => {
        carti.remove();
        if (linkedBtn) resetButton(linkedBtn);
    }, 300);

    crt -= 1;
    if (crt === 0) showEmptyCart();
}

function resetButton(button) {
    if (crt === 0) {
        const checkbtn = document.getElementById("checkbtn");
    checkbtn.style.background = "rgb(0,134,47,0.3)";
    checkbtn.style.color = "rgba(255,255,255,0.5)";
    }
    button.style.background = "";
    button.innerHTML = "Add To Cart <i class='fa fa-cart-plus'></i>";
    button.value = "add";
    button.style.padding = "";

    
}

function showEmptyCart() {
    const catt = document.getElementById("catt");

    const empty = document.createElement("div");
    empty.className = "empty";
    empty.id = "empt";
    empty.innerHTML = "<i class='fat fa-cart-shopping'></i><p>Your Cart is currently empty</p>";

    empty.style.height = "0px";
    empty.style.opacity = "0";

    setTimeout(() => {
        empty.style.height = "190px";
        empty.style.opacity = "1";
    }, 100);

    setTimeout(() => catt.appendChild(empty), 100);
}


function cadiv() {  
    cdiv = document.getElementById("cartdiv")  
    if (cdiv.dataset.value == "off") {  
        cdiv.style.display = "block "  
        setTimeout(() => {  
            cdiv.style.background = "rgb(0,0,0,0.7)"  
            cdiv.style.backdropFilter = "blur(20px)"  
            cdiv.style.opacity = "1"  
            cdiv.dataset.value = "on"  
        }, 10)  
    }  
    else if (cdiv.dataset.value == "on") {  
        cdiv.style.background = "rgb(0,0,0,0)"  
        cdiv.style.backdropFilter = "blur(0px)"  
        cdiv.style.opacity = "0"  
        setTimeout(() => {  
            cdiv.dataset.value= "off"  
            cdiv.style.display = "none"  
        }, 300)  
    }  
      
}  

