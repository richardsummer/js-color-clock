const $display = document.querySelector('.clock-display');
const $progressBar = document.querySelector('.clock-progress-bar');

setInterval(setTime, 1000);

function setTime() {
  const now = new Date();

  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  const currentTime = `${hours}:${minutes}:${seconds}`;
  $display.innerHTML = `${hours}:${minutes}:${seconds}`;

  const width = `${seconds / 60 * 14}rem`;
  $progressBar.style.width = width;
  console.log(width);
}
