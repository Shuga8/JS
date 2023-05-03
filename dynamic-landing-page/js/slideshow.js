//Select DOM Elements
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
let autoSlide = true;
let slideTime = 4000;
let slideInterval;
const dots = document.querySelectorAll(".dot");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");

//Get Previous Slide
function prevSlide() {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  const active = document.querySelector(".active");
  active.classList.remove("active");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");

    setTimeout(() => {
      current.previousElementSibling.childNodes[1].classList.add("active");
    }, 200);
  } else {
    slides[slides.length - 1].classList.add("current");
    setTimeout(() => {
      slides[slides.length - 1].childNodes[1].classList.add("active");
    }, 200);
  }

  setTimeout(() => {
    current.classList.remove("current");
    active.classList.remove("active");
  });

  setTimeout(() => {
    if (slides[0].classList.contains("current")) {
      changeDot(1);
    } else if (slides[1].classList.contains("current")) {
      changeDot(2);
    } else if (slides[2].classList.contains("current")) {
      changeDot(3);
    }
  }, 100);
}

//Get Next SLide
function nextSlide() {
  //Get current element class
  const current = document.querySelector(".current");
  //Remove current element class
  current.classList.remove("current");

  const active = document.querySelector(".active");
  active.classList.remove("active");

  //check if there is a next element sibling
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");

    setTimeout(() => {
      current.nextElementSibling.childNodes[1].classList.add("active");
    }, 200);
  } else {
    slides[0].classList.add("current");
    setTimeout(() => {
      slides[0].childNodes[1].classList.add("active");
    }, 200);
  }

  setTimeout(() => {
    current.classList.remove("current");
    active.classList.remove("active");
  });

  setTimeout(() => {
    if (slides[0].classList.contains("current")) {
      changeDot(1);
    } else if (slides[1].classList.contains("current")) {
      changeDot(2);
    } else if (slides[2].classList.contains("current")) {
      changeDot(3);
    }
  }, 100);
}

function getDotAndSlide(e) {
  let clickedDot = e.target;

  const activeDot = document.querySelector(".active-dot");
  activeDot.classList.remove("active-dot");

  clickedDot.classList.add("active-dot");
}

//Previous Button
prev.addEventListener("click", (e) => {
  prevSlide();

  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
});

//Next Button
next.addEventListener("click", (e) => {
  nextSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
});

//dots click
dots.forEach(function (dot) {
  dot.addEventListener("click", (e) => {
    if (autoSlide) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, slideTime);
    }
    getDotAndSlide(e);
  });
});

dot1.onclick = function (e) {
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
  let clickedDot = e.target;

  const activeDot = document.querySelector(".active-dot");
  activeDot.classList.remove("active-dot");

  clickedDot.classList.add("active-dot");
  //Get current element class
  const current = document.querySelector(".current");
  //Remove current element class
  current.classList.remove("current");

  //Get active element class
  const active = document.querySelector(".active");
  //Remove active class
  active.classList.remove("active");

  slides[0].classList.add("current");

  setTimeout(() => {
    slides[0].childNodes[1].classList.add("active");
  }, 200);

  setTimeout(() => {
    current.classList.remove("current");
    active.classList.remove("active");
  });

  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
};

dot2.onclick = function (e) {
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }

  let clickedDot = e.target;

  const activeDot = document.querySelector(".active-dot");
  activeDot.classList.remove("active-dot");

  clickedDot.classList.add("active-dot");

  //Get current element class
  const current = document.querySelector(".current");
  //Remove current element class
  current.classList.remove("current");

  //Get active element class
  const active = document.querySelector(".active");
  //Remove active class
  active.classList.remove("active");

  slides[1].classList.add("current");

  setTimeout(() => {
    slides[1].childNodes[1].classList.add("active");
  }, 200);

  setTimeout(() => {
    current.classList.remove("current");
    active.classList.remove("active");
  });

  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
};

dot3.onclick = function (e) {
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
  let clickedDot = e.target;

  const activeDot = document.querySelector(".active-dot");
  activeDot.classList.remove("active-dot");

  clickedDot.classList.add("active-dot");

  //Get current element class
  const current = document.querySelector(".current");
  //Remove current element class
  current.classList.remove("current");

  //Get active element class
  const active = document.querySelector(".active");
  //Remove active class
  active.classList.remove("active");

  slides[2].classList.add("current");

  setTimeout(() => {
    slides[2].childNodes[1].classList.add("active");
  }, 200);

  setTimeout(() => {
    current.classList.remove("current");
    active.classList.remove("active");
  });

  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideTime);
  }
};

//Activate auto sliding carousel
if (autoSlide) {
  slideInterval = setInterval(nextSlide, slideTime);
}

function changeDot(num) {
  let classname = `.dot${num}`;
  const activeDot = document.querySelector(".active-dot");
  activeDot.classList.remove("active-dot");

  const currentDot = document.querySelector(classname);
  currentDot.classList.add("active-dot");
}
