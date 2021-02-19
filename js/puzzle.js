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
    url: 'https://images.pexels.com/photos/3277180/pexels-photo-3277180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    preserve: 'height',
    offset: -100
  }, 
  {
    url: 'https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    preserve: 'width',
    offset: -20
  },
  {
    url: 'data:image/jpeg;base64,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',
    preserve: 'width',
    offset: -40
  },
    
  {
    url: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    preserve: 'height',
    offset: 0
  }, ];

  const gameContainer = select('gameContainer');
  const startButton = select('startButton');
  const minute = select('minute');
  const seconds = select('seconds');

  let bestTime = 0;
  let stage = 2;

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