let ourSkills = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".our-skills .skills .skill .the-progress span")

let stats = document.querySelector(".stats")
let statsSpans = document.querySelectorAll(".stats .box .number")
let started = false; // Function Started ? No



window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= stats.offsetTop - 400) {
    if (!started) {
      statsSpans.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


let countDownDate = new Date("Jan 1, 2022 0:0:0").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = dateNow - countDownDate;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .info .time .unit .days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".events .info .time .unit .Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .info .time .unit .Minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .info .time .unit .Seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);