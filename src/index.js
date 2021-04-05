import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let nextBGcolor = '';
  let isStop = false;
  
  const ref = {
      start: document.querySelector('button[data-action="start"]'),
      stop: document.querySelector('button[data-action="stop"]'),
      body: document.querySelector('body')
  }
  
  ref.start.addEventListener('click', startСhangingBG);
 
 function startСhangingBG () {
  ref.start.removeEventListener('click', startСhangingBG);
  ref.stop.addEventListener('click', stopСhangingBG);
  const intervalId = setInterval(() => {    
     if (isStop){
    clearInterval(intervalId);
    isStop = false;
    ref.start.addEventListener('click', startСhangingBG);
    ref.stop.removeEventListener('click', stopСhangingBG);
    return
  };
  nextBGcolor = colors[randomIntegerFromInterval(0, colors.length-1)];
  ref.body.setAttribute("style", `background-color: ${nextBGcolor}`);
  }, 1000);    
};

 function stopСhangingBG () {
  isStop = true;
};