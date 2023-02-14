const shoe1 = document.querySelector(".shoe1");
const shoe2 = document.querySelector(".shoe2");

const circle1 = document.querySelector(".circle-color1");
const circle2 = document.querySelector(".circle-color2");

const topEl = document.querySelector(".top");
const priceTag = document.querySelector(".price-tag");

const circleBtn = document.querySelectorAll(".circle-btn");

for (let i = 0; i < circleBtn.length; i++) {
  circleBtn[i].addEventListener("click", function () {
    for (let i = 0; i < circleBtn.length; i++) {
      circleBtn[i].classList.remove("active");
    }
    circleBtn[i].classList.add("active");
  });
}

circle1.addEventListener("click", function () {
  shoe1.classList.add("change2");
  shoe2.classList.add("change2-shoe");
  shoe1.classList.remove("change1");
  shoe2.classList.remove("change1-shoe");

  topEl.style.backgroundColor = "#f1ae04";
  priceTag.style.backgroundColor = "#1c477a";
});

circle2.addEventListener("click", function () {
  shoe1.classList.add("change1");
  shoe2.classList.add("change1-shoe");
  shoe1.classList.remove("change2");
  shoe2.classList.remove("change2-shoe");

  topEl.style.backgroundColor = "#c02244";
  priceTag.style.backgroundColor = "#c02244";
});
