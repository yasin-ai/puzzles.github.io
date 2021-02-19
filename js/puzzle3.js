'use strict';
addEventListener('DOMContentLoaded', function() {
  /**
  * Create the game
  */
  const select = function(id) {
    return document.getElementById(id);
  };
 
  const images = [
    {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/V.M._Doroshevich-East_and_War-British_India._Railroad_Station_in_Bombay_enhaced.jpg',
    preserve: 'height',
    offset: -100
  }, 
  {
    url: 'https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    preserve: 'width',
    offset: -20
  },
  {
    url: 'https://images.pexels.com/photos/2589011/pexels-photo-2589011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    preserve: 'width',
    offset: -40
  },
    
  {
    url: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    preserve: 'height',
    offset: 0
  }, ];

  const gameContainer = select('gameContainer3');
  const startButton = select('startButton3');
  const minute = select('minute3');
  const seconds = select('seconds3');

  let bestTime = 0;
  let stage = 0;

  const { width } = gameContainer.getBoundingClientRect();
  const columns = 3;
  const rows = 3;
  const tileSize = Math.round(width / columns);

  const gameOptions = {
    tileSize,
    columns,
    rows,
    image: images[stage]
   
  };

  const puzzle = new Puzzle(gameOptions);

  startButton.addEventListener('click', () => {
    puzzle.start();
    startButton.style.visibility = 'hidden';
    // gameContainer.requestFullscreen();
  });

  function formatTime(seconds) {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    return {
      minutes: m,
      seconds: s,
    };
  }

  puzzle.onTimeUpdate(function(event) {
    const time = formatTime(event.time);
    minute.innerText = time.minutes;
    seconds.innerText = time.seconds;
  });

  puzzle.onSolve(function(event) {
    startButton.style.visibility = 'visible';
    if (event.time < bestTime) {
      bestTime = event.time;
    } 

  });

  gameContainer.appendChild(puzzle.stage);

})