const $display = document.querySelector('.clock-display');

setInterval(setTime, 1000);

function setTime() {
  const now = new Date();

  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  $display.innerHTML = `${hours}:${minutes}:${seconds}`;
}
