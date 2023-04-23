//Select DOM Elements
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");

//Get Previous Slide
const prevSlide = () => {
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
};

//Get Next SLide
const nextSlide = () => {
  //Get current element class
  const current = document.querySelector(".current");
  //Remove current element class
  current.classList.remove("current");

  //check if there is a next element sibling
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });
};

prev.addEventListener("click", (e) => {
  prevSlide();
});
next.addEventListener("click", (e) => {
  nextSlide();
});
