const toggleBar = document.querySelector("#toggleBar");
const rangeBar = document.getElementById("rangeBar");
const pageViews = document.getElementById("pageviews");
const monthlyBill = document.querySelectorAll("[data-monthlyBill]");
const toggleCircle = toggleBar.querySelector("#toggleCircle");
const elementPrice = [6, 12, 16, 20, 24];
const elementPageViews = [30, 50, 100, 250, 500];
const discount = 25;

//add logic and toggle the toggleBar depending on the screen size

toggleBar.addEventListener("click", (e) => {
  if (screen.width <= 425) {
    toggleCircle.classList.toggle("translate-x-[16px]");
    toggleBar.classList.toggle("bg-StrongCyanSliderBackround");
  } else {
    toggleCircle.classList.toggle("translate-x-[27px]");
    toggleBar.classList.toggle("bg-StrongCyanSliderBackround");
  }
});

//calculation of the values using the predifined arrays and bool variable to correctly calculate the current value

function calculation() {
  let bool = null;
  if (rangeBar.value == 1) {
    bool = 0;
    pageViews.innerText = `${elementPageViews[bool]}k`;
    if (
      toggleCircle.classList.contains("translate-x-[16px]") ||
      toggleCircle.classList.contains("translate-x-[27px]")
    ) {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${Math.floor(
          (discount * (12 * elementPrice[bool])) / 100
        ).toFixed(2)}`;
      });
    } else {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${elementPrice[bool]}.00`;
      });
    }
    rangeBar.style.background =
      "linear-gradient(to right,hsl(174, 86%, 45%) 0%,hsl(174, 86%, 45%) 0%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)";
  } else if (rangeBar.value == 2) {
    bool = 1;
    if (
      toggleCircle.classList.contains("translate-x-[16px]") ||
      toggleCircle.classList.contains("translate-x-[27px]")
    ) {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${Math.floor(
          (discount * (12 * elementPrice[bool])) / 100
        ).toFixed(2)}`;
      });
    } else {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${elementPrice[bool]}.00`;
      });
    }
    pageViews.innerText = `${elementPageViews[bool]}k`;
    rangeBar.style.background =
      "linear-gradient(to right,hsl(174, 86%, 45%) 0%,hsl(174, 86%, 45%) 25% ,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)";
  } else if (rangeBar.value == 3) {
    bool = 2;
    if (
      toggleCircle.classList.contains("translate-x-[16px]") ||
      toggleCircle.classList.contains("translate-x-[27px]")
    ) {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${Math.floor(
          (discount * (12 * elementPrice[bool])) / 100
        ).toFixed(2)}`;
      });
    } else {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${elementPrice[bool]}.00`;
      });
    }
    pageViews.innerText = `${elementPageViews[bool]}k`;
    rangeBar.style.background =
      "linear-gradient(to right,hsl(174, 86%, 45%) 0%,hsl(174, 86%, 45%) 50%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)";
  } else if (rangeBar.value == 4) {
    bool = 3;
    if (
      toggleCircle.classList.contains("translate-x-[16px]") ||
      toggleCircle.classList.contains("translate-x-[27px]")
    ) {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${Math.floor(
          (discount * (12 * elementPrice[bool])) / 100
        ).toFixed(2)}`;
      });
    } else {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${elementPrice[bool]}.00`;
      });
    }
    pageViews.innerText = `${elementPageViews[bool]}k`;
    rangeBar.style.background =
      "linear-gradient(to right,hsl(174, 86%, 45%) 0%,hsl(174, 86%, 45%) 75%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)";
  } else if (rangeBar.value == 5) {
    bool = 4;
    if (
      toggleCircle.classList.contains("translate-x-[16px]") ||
      toggleCircle.classList.contains("translate-x-[27px]")
    ) {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${Math.floor(
          (discount * (12 * elementPrice[bool])) / 100
        ).toFixed(2)}`;
      });
    } else {
      monthlyBill.forEach((elem) => {
        elem.innerText = `${elementPrice[bool]}.00`;
      });
    }
    pageViews.innerText = `${elementPageViews[bool]}k`;
    pageViews.innerText = "500k";
    rangeBar.style.background =
      "linear-gradient(to right,hsl(174, 86%, 45%) 0%,hsl(174, 86%, 45%) 100%,hsl(224, 65%, 95%) 0%,hsl(224, 65%, 95%) 100%)";
  }
}

//event listener for the rangeBar and the toggleBar

rangeBar.addEventListener("input", calculation);
toggleBar.addEventListener("click", calculation);
