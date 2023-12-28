const theBody = document.querySelector('body');
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

function bodyScroll(){
    if(Navbar.classList.contains('show')){
        theBody.classList.add('hide-scroll');
    }
    else if(theBody.classList.contains('hide-scroll')){
        theBody.classList.remove('hide-scroll');
    }
}

function showHide(){
    Navbar.classList.toggle('show');
    bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;


// scroll to top code

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', () =>{
    topFunction();
});