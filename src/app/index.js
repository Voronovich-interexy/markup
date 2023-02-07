import './styles/main.scss';

// === дано
// скорость
// фреймрейт
// timestamp
// ширина артикла
// ширина квадрата

window.onload = () => {
  const container = document.querySelector('.square__container-js');
  const maxXPosition = container.getBoundingClientRect().width;
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
  let framerate = 60;
  let speedX = 10;
  let prevTime = 0;

  function step(time) {
    if (!prevTime) {
      prevTime = time;
    }
    let timestamp = time - prevTime;
    //  console.log('t:', timestamp);

    window.requestAnimationFrame(step);

    prevTime = time;
    positionX += speedX * ((timestamp / 1000) * framerate);

    block.style.transform = `translateX(${positionX}px)`;

    if (positionX > maxXPosition - 40 || positionX < 0) {
      speedX = speedX * -1;
    }
  }

  window.requestAnimationFrame(step);
}
