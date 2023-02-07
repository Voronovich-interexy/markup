import './styles/main.scss';

// === дано
// скорость
// фреймрейт
// timestamp
// ширина артикла
// ширина квадрата

window.onload = () => {
  const container = document.querySelector('.square__container-js');
  const maxXPosition = parseInt(getComputedStyle(container).width);
  console.log(maxXPosition);
  const timeBlock = document.querySelector('.running__square-js');
  const frameBlock = document.querySelector('.running__square-frame');
  timeoutAnimate(maxXPosition, timeBlock);
  frameAnimate(maxXPosition, frameBlock);
};

function timeoutAnimate(maxXPosition, block) {
  const refreshRate = 10;

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

// function frameAnimate(maxXPosition,block) {
//    let positionX = 0;

//   let speedX = 10;
//   let time;

//   function step(ts) {
//     window.requestAnimationFrame(step);
//     let dt = ts - (time || ts);

//     time = ts;

//     positionX += speedX * ((dt / 1000) * 60);

//     block.style.transform = `translateX(${positionX}px)`;

//     if (positionX > maxXPosition - 40 || positionX < 0) {
//       speedX = speedX * -1;
//     }
//   }

//   window.requestAnimationFrame(step);
// }

function frameAnimate(maxXPosition, block) {
  let positionX = 0;
  let speedX = 600;
  let prevTime = 0;

  function step(time) {
    if (!prevTime) {
      prevTime = time;
    }

    let timestamp = time - prevTime;
    prevTime = time;
    positionX += speedX * (timestamp / 1000);

    if (positionX > maxXPosition) {
      positionX = maxXPosition;
      speedX = speedX * -1;
    } else if (positionX < 0) {
      speedX = speedX * -1;
      positionX = 0;
    }

    block.style.transform = `translateX(${positionX}px)`;

    window.requestAnimationFrame(step);
  }
  let ss = window.requestAnimationFrame(step);
  window.blur(() => cancelAnimationFrame(ss));
}
