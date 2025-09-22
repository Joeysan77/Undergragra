(function () {
  // simple debounce
  function debounce(fn, wait = 120) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('search');
    const container = document.getElementById('cont');
    const contt = document.getElementById("container")
    const cards = Array.from(document.querySelectorAll('.flexbox'));
    

    if (!search) {
      console.error('Search input #search not found.');
      return;
    }

    // Save each card's original display (so we don't hardcode "flex")
    cards.forEach(card => {
      const cs = window.getComputedStyle(card);
      // if display is "none" (unlikely), default to "flex"
      card.dataset.origDisplay = cs.display && cs.display !== 'none' ? cs.display : 'flex';
    });
  
    // show/hide "no results" message
    const NO_ID = 'noResultsMessage';
    function setNoResults(show) {
      const existing = document.getElementById(NO_ID);
      sebdiv = document.getElementById("search_bdiv")
      if (show && !existing) {
        const p = document.createElement('p');
        p.id = NO_ID;
        p.textContent = 'No universities found';
        p.style.textAlign = 'center';
        p.style.color = '#888';
        p.style.margin = '16px 0';
        container.appendChild(p);
        sebdiv.appendChild(p)
      } else if (!show && existing) {
        existing.remove();
      }
      
    }

    function filterCards() {
      const q = search.value.trim().toLowerCase();
      let found = 0;
      
      cards.forEach(card => {
        const name = card.querySelector('.flexp')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.flexpid')?.textContent.toLowerCase() || '';
        const text = (name + ' ' + desc);
        if (q === '' || text.includes(q)) {
          card.style.display = card.dataset.origDisplay;
          found++;
            
        } else {
          card.style.display = 'none';
        }
      });

      setNoResults(found === 0);
      // console.log('search', q, 'matches', found);
    }

    // run on input with debounce
    search.addEventListener('input', debounce(filterCards, 80));

    // initial pass (in case page loads with something in the search box)
  
  });
})();

function up() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "0px"
    container.style.paddingTop = "120px"
    navig.style.transform = "rotateX(0deg)"
    x = 1
}

function down() {
    header = document.getElementById("header")
    container = document.getElementById("container")
    nav = document.getElementById('navig')
    header.style.top = "-100px"
    container.style.paddingTop = "70px"
    navig.style.transform = "rotateX(180deg)"
    x = 0
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

function darke() {
  
  dark = document.getElementById('dark')
  if (dark.dataset.toggle == "off") {
    dark.style.display = 'block'
   setTimeout(() => {
  dark.style.background = 'rgba(0,0,0,0.5)';
  dark.style.backdropFilter = 'blur(20px)';
  dark.dataset.toggle = "on"
}, 10);
  }
  else if (dark.dataset.toggle == "on") {
    dark.style.background = 'rgb(0,0,0,0)'
    dark.style.backdropFilter = 'blur(0px)'
    dark.dataset.toggle = "off"
    setTimeout(() => dark.style.display = 'none' , 300)
  }
}

function menue() {
  
  menu = document.getElementById('menu')
  if (menu.dataset.toggle == "off") {
    menu.style.display = 'block'
   setTimeout(() => {
  menu.style.left = '0';
  menu.dataset.toggle = "on"
  darke()
}, 10);
  }
  else if (menu.dataset.toggle == "on") {
    menu.style.left = '100%'
    menu.dataset.toggle = "off"
    setTimeout(() =>{ menu.style.display = 'none';
        darke() }
        , 300)
  }
}

function open_search() {
  const sebdiv = document.getElementById("search_bdiv");
  const sibiv  = document.getElementById("sibiv");
  const seax   = document.getElementById("seax");
  const fx     = document.getElementById("fx");
  const ffx    = document.getElementById("ffx");
  const second = document.getElementById("second");
  const ix     = document.getElementById("ix");
  const search = document.getElementById("search")

  // Check toggle state
  if (sebdiv.dataset.toggle === "off") {
    // Create one close icon
    const ixx = document.createElement("i");
    ixx.className = "fa fa-xmark ixx";

    // Open: move ffx
    sebdiv.style.display = "block";
    sibiv.appendChild(ffx);

    setTimeout(() => {
      sebdiv.style.opacity = "1";
      sebdiv.style.background = "rgba(0,0,0,0.8)";
      ix.style.width = "0";
      ix.style.opacity = "1";
      second.appendChild(ixx);
    }, 0);

    // Close logic
    function onx() {
      fx.appendChild(ffx);
      sebdiv.style.background = "transparent";
      sebdiv.style.opacity = "0";
      setTimeout(() => {
        sebdiv.style.display = "none";
        ixx.remove();
        ix.style.width = "auto";
        ix.style.opacity = "1";
        search.value = ""
        sebdiv.dataset.toggle = "off"; // reset toggle here ✅
      }, 300);
    }

    ixx.addEventListener("click", onx);
    sebdiv.dataset.toggle = "on"; // mark as open
  }
}