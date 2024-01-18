document.addEventListener("click", function (event) {
  if (event.target.matches("div")) {
    event.target.focus();
  }
});

var animation = gsap
  .timeline({repeat: -1, ease: "power1.out"})
  .from(".fw-engage.cc-filled", {duration: 1.3, opacity: 0})
  .from(".fw-details.is-engage", {duration: 1, opacity: 0, x: 10}, "<")
  .from(".fw-bar.is-engage", {duration: 5, width: "0%"}, "<")

  .add("play-qualify")
  .from(".fw-qualify.cc-filled", {duration: 1.3, opacity: 0})
  .from(".fw-details.is-qualify", {duration: 1, opacity: 0, x: 10}, "<")
  .from(".fw-bar.is-qualify", {duration: 5, width: "0%"}, "<")
  .to(".fw-details.is-engage", {duration: 0.3, opacity: 0}, "<")
  .to(".fw-bar.is-engage", {duration: 0.3, opacity: 0}, "<")

  .add("play-advance")
  .from(".fw-advance.cc-filled", {duration: 1.3, opacity: 0})
  .from(".fw-details.is-advance", {duration: 1, opacity: 0, x: 10}, "<")
  .from(".fw-bar.is-advance", {duration: 5, width: "0%"}, "<")
  .to(".fw-details.is-qualify", {duration: 0.3, opacity: 0}, "<")
  .to(".fw-bar.is-qualify", {duration: 0.3, opacity: 0}, "<")

  .add("play-close")
  .from(".fw-close.cc-filled", {duration: 1.3, opacity: 0})
  .from(".fw-details.is-close", {duration: 1, opacity: 0, x: 10}, "<")
  .from(".fw-bar.is-close", {duration: 5, width: "0%"}, "<")
  .to(".fw-details.is-advance", {duration: 0.3, opacity: 0}, "<")
  .to(".fw-bar.is-advance", {duration: 0.3, opacity: 0}, "<")

  .to(".cc-filled", {duration: 0.3, opacity: 0}, "+=2")
  .to(".fw-details", {duration: 0.3, opacity: 0}, "<")
  .to(".fw-bar", {duration: 0.3, opacity: 0}, "<");

document.getElementById("vs-engage").onclick = () => animation.restart();
document.getElementById("vs-qualify").onclick = () =>
  animation.play("play-qualify");
document.getElementById("vs-advance").onclick = () =>
  animation.play("play-advance");
document.getElementById("vs-close").onclick = () =>
  animation.play("play-close");
