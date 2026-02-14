 
window.onload = function() {
// Simple check for mobile user agents
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Optional: Secondary check for screen width (e.g., standard mobile/tablet breakpoint)
const isSmallScreen = window.innerWidth <= 1024;

// If it's NOT mobile AND NOT a small screen, show the overlay
if (!isMobile && !isSmallScreen) {
    document.getElementById('mobile-overlay').style.display = 'block';
    // Disable scrolling on the main page
    document.body.style.overflow = 'hidden'; 
}
};

 
var i = 0;
var txt = 'Happy Valentines day.. Jov!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}