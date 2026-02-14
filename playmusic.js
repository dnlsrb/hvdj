 const button = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
 const leaf = document.querySelector('.flower__leaf');
 
 button.addEventListener('click', () => {
 
      audio.play();
      button.style.visibility = 'hidden';
      typeWriter();
 
      leaf.classList.add('animate');  
});