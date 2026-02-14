 const button = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
 const leaf = document.querySelector('.flower__leaf');
const text2 = document.getElementById('Tx');
 button.addEventListener('click', () => {
    text2.style.visibility = 'visible';
      audio.play();
      button.style.visibility = 'hidden';
      typeWriter();
 
      leaf.classList.add('animate');  
});