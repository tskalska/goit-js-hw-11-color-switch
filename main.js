const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBthEl = document.querySelector('[data-action="start"]');
const stopBthEl = document.querySelector('[data-action="stop"]');
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const putBgColor = colors => {
  document.body.style.background = colors[randomIntegerFromInterval(0, colors.length)]
  console.log(123);
};

const startChangeColor = () => {
  interval = setInterval(putBgColor,2000,colors);
  startBthEl.setAttribute('disabled',true);
};

const stopChangeColor = () => {
  clearInterval(interval);
  startBthEl.removeAttribute('disabled',);
}

startBthEl.addEventListener('click', startChangeColor);

stopBthEl.addEventListener('click', stopChangeColor);

