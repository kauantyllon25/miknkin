
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".item");
let indicators = document.querySelector(".indicators");
let dots = indicators.querySelectorAll("ul li");
let list = container.querySelector(".list");
let description = document.querySelector(".description");
let carInfo = document.querySelector(".car-information");
let h2 = document.querySelector("h2");


let active = 0;
let lastPosition = items.length - 1;

prevButton.addEventListener("click", () => {
  active = active - 1 < 0 ? lastPosition : active - 1;
  setSlider();
});

nextButton.addEventListener("click", () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
});


setSlider();


function setSlider() {
 
  items.forEach((item, index) => {
    item.classList.remove("active");
    dots[index].classList.remove("active");
  });

  
  items[active].classList.add("active");
  dots[active].classList.add("active");

  indicators.querySelector(".number").textContent = `0${active + 1}`;
}
