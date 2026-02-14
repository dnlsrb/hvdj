 const button = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
const text2 = document.getElementById('Tx');
 button.addEventListener('click', () => {
    text2.style.visibility = 'visible';
      audio.play();
      button.style.visibility = 'hidden';
      typeWriter();
});