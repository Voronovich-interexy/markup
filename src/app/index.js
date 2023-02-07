import './styles/main.scss';

window.onload = () => {
  const container = document.querySelector('.square__container-js');
  const maxXPosition = container.getBoundingClientRect().width;
  timeoutAnimate(maxXPosition);
  frameAnimate(maxXPosition);
};

function timeoutAnimate(maxXPosition) {
  const refreshRate = 10;
  let block = document.querySelector('.running__square-js');
  let speedX = 6;
  let positionX = 0;

  window.setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxXPosition - 40 || positionX < 0) {
      speedX = speedX * -1;
    }
    block.style.transform = `translateX(${positionX}px)`;
  }, refreshRate);
}

// === дано
// скорость
// фреймрейт
// timestamp
// ширина артикла
// ширина квадрата

function frameAnimate(maxXPosition) {
  let block = document.querySelector('.running__square-frame');
  let positionX = 0;

  let speedX = 10;
  let time;

  function step(ts) {
    window.requestAnimationFrame(step);
    let dt = ts - (time || ts);

    time = ts;

    positionX += speedX * ((dt / 1000) * 60);

    block.style.transform = `translateX(${positionX}px)`;

    if (positionX > maxXPosition - 40 || positionX < 0) {
      speedX = speedX * -1;
    }
  }

  window.requestAnimationFrame(step);
}
