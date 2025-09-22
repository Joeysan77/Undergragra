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

const track = document.querySelector('.track');
let index = 0;

function nextSlide() {
  index = (index + 1) % 3; // 0 → 1 → 2 → 0
  track.style.transform = `translateX(-${index * (100 /3)}%)`;
  b1 = document.getElementById("bdot1")
  b2 = document.getElementById("bdot2")
  b3 = document.getElementById("bdot3")
  inde = index + 1
  if (inde == 1) {
      b1.style.color = "rgb(0,102,255,1)"
      b2.style.color = "rgb(0,102,255,.3)"
      b3.style.color = "rgb(0,102,255,.3)"
      
  }
  else if (inde == 2) {
      b1.style.color = "rgb(0,102,255,.3)"
      b2.style.color = "rgb(0,102,255,1)"
      b3.style.color = "rgb(0,102,255,.3)"
      
  }
  else if (inde == 3) {
      b1.style.color = "rgb(0,102,255,.3)"
      b2.style.color = "rgb(0,102,255,.3)"
      b3.style.color = "rgb(0,102,255,1)"
      
  }
}

setTimeout(() => setInterval(nextSlide , 2500) , 0 )


hearts = document.querySelectorAll(".coheart")
hearts.forEach((heart) => {
    heart.addEventListener("click" , () => {
        if (heart.dataset.toggle == "off") {
        heart.style.color = "#FF444C"
        heart.dataset.toggle = "on"
        heart.className = "fa fa-heart coheart fa-beat"
        setTimeout(() => {heart.className = "fa fa-heart coheart "} , 400)
    }
    else if (heart.dataset.toggle == "on") {
        heart.style.color = "#F0F1F3"
        heart.dataset.toggle = "off"
        heart.className = "fa fa-heart coheart fa-beat"
        setTimeout(() => {heart.className = "fa fa-heart coheart "} , 400)
    }
    })
})
