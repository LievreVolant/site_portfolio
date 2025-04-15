

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("burger");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  const state = {};
  const carouselList = document.querySelector('.carousel-list');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const elems = Array.from(carouselItems);
  
  carouselList.addEventListener('click', function (event) {
    let newActive = event.target;
    let isItem = newActive.closest('.carousel-item');
  
    if (!isItem || newActive.classList.contains('carousel-item_active')) {
      return;
    };
    
    update(newActive);
  });
  
  const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;
  
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);
    
    current.classList.remove('carousel-item_active');
    
    [current, prev, next, first, last].forEach(item => {
      let itemPos = item.dataset.pos;
  
      item.dataset.pos = getPos(itemPos, newActivePos)
    });
  };
  
  const getPos = function (current, active) {
    const diff = current - active;
  
    if (Math.abs(current - active) > 2) {
      return -current
    }
  
    return diff;
  }