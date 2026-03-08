const terminal = document.querySelector(".terminal");

const message = [
  "Initializing Hacking",
  "Reading Yours Files",
  "Passwords Files Detected",
  "Sending All Passwords and Personal Files To Server",
  "Cleaning Up",
];

function randomDely() {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 7 + 1) * 1000;
    setTimeout(resolve, time);
  });
}
async function StartHack() {
  for (let msg of message) {
    let line = document.createElement("div");
    line.classList.add("line", "dots");
    line.textContent = msg;
    terminal.appendChild(line);

    await randomDely();

    line.classList.remove("dots");
    line.textContent = msg + "...";
  }
}
StartHack();
