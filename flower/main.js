  const flowers = document.getElementById('flowers');
  
  function displayFlower(){
    setTimeout(() => {
      flowers.style.display = 'block';
    }, 900);
  }
onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-button');
  const music = document.getElementById('background-music');

  playButton.addEventListener('click', function () {
      music.play();
  });
});document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const music = document.getElementById('background-music');

  playButton.addEventListener('click', function () {
      music.play();
  });

  pauseButton.addEventListener('click', function () {
      music.pause();
  });
});


