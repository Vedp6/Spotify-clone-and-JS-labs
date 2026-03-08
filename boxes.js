function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r} ${g} ${b})`;
}
function randomTextColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r} ${g} ${b})`;
}
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = randomColor();
});
document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = randomTextColor();
});

setInterval(() => {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = randomColor();
  });
}, 1000);

