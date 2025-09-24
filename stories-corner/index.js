function up() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "0px"
    container.style.paddingTop = "110px"
    navig.style.transform = "rotateX(0deg)"
}

function down() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "-100px"
    container.style.paddingTop = "35px"
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


const stp = document.getElementById("story_page");
const storys = document.querySelectorAll(".story");
const stp1 = document.getElementById("stp1");
const stp2 = document.querySelector(".stp2");
const stm = document.getElementById("stimg");
const byp = document.getElementById("byp");
const byimg = document.getElementById("byimg");
const ppe = document.querySelector(".ppe");
const chap = document.getElementById("chap");
const set = document.getElementById("set");
const nabtn = document.getElementById("navigbtn");
const abt = document.getElementById("abt");
const prev = document.querySelector(".prev");
const epno = document.getElementById("epno");
let ep = 1;
let page = "";
let storyData = null;

// Update navigation button states
function updateNavButtons() {
    prev.style.background = ep <= 1 ? "rgb(0,134,47,.3)" : "rgb(0,134,47)";
    abt.style.display = ep > 1 ? "none" : "flex";
    epno.innerHTML = "Episode " + ep;
}

// Load episode content
function loadEpisode() {
    if (!storyData) return;
    const epData = storyData["ep" + ep];
    if (!epData) return;

    ppe.innerHTML = epData.episod.replace(/\n\n/g, "<br><br>");
    chap.innerHTML = "Episode " + ep + " : " + epData.chapter;
    set.innerHTML = epData.set1;
    stp.scrollTop = 0;
    stp1.innerHTML = stp2.innerHTML + " : " + ep;
    updateNavButtons();
}

// Open story modal
storys.forEach((story) => {
    story.addEventListener("click", () => {
        ep = 1;
        page = story.dataset.image;
        stm.src = "images/" + page + ".png";
        stp2.innerHTML = story.dataset.title;
        byp.innerHTML = story.dataset.by;
        byimg.src = "images/" + story.dataset.user_img + ".png";

        stp.style.display = "block";
        setTimeout(() => {
            stp.style.opacity = "1";
            stp.style.background = "#f0f1f3";
            stp.style.left = "0";
        }, 100);
        history.pushState({ storyOpen: true }, "")
        fetch("stories/" + page + ".json")
            .then(res => res.json())
            .then(data => {
                storyData = data;
                loadEpisode();
            });
    });
});

// Next episode
nabtn.addEventListener("click", () => {
    ep += 1;
    loadEpisode();
});

// Previous episode
prev.addEventListener("click", () => {
    if (ep > 1) {
        ep -= 1;
        loadEpisode();
    }
});

// Close story modal
const stc = document.querySelector(".stclose");
stc.addEventListener("click", () => {
    stp.style.opacity = "0";
    stp.style.background = "transparent";
    stp.style.left = "100%";
    ep = 1;
    storyData = null;
    setTimeout(() => {
        stp.style.display = "none";
    }, 400);
});


window.addEventListener("popstate", (event) => {
  if (stp.style.display === "block") {
    stp.style.opacity = "0";
    stp.style.background = "transparent";
    stp.style.left = "100%";
    ep = 1;
    storyData = null;
    setTimeout(() => {
        stp.style.display = "none";
    }, 400);
    // prevent actually leaving the page
    history.pushState(null, "")
  }
})























