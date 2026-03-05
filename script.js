 
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
var txt = "Happy Valentines day.. Jov! sana di tumigil yung song if tumigil maybe sa slow ng server haha, enjoy your day po and sa mga anakish nyo din dyan kila tita, tito. i hope masaya ang araw mo ngayon and sana you visited this site that i made specially for you,aaaaaaand thennnn mga 1 week ago, i really wanted to invite you to be my valentines date or simba, stranger date haha, But I think it's impossible so instead I made this site. Soooooo even though we don’t have chance na to see each other, i still wishes you for the happiest jov and for dream come true jov kahit di na kita makikita don sa part nayon buong buhay ko po iwiwish na you’ll be successful in life, i hope you achieve the things you wanted and the things that you deserve so yon lang. - Dan.\n ingat ka palagi imy <3\n Thankyou for visiting this site";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
