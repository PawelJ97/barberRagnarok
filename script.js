//-----------------NAVIGATION BAR SCRIPT--------------------
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header');
const close_menu = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

//navigation - active 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})
//background when scrolling
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 650) {
        header.style.backgroundColor = 'rgb(13, 13, 13, 0.8)';
        header.style.backdropFilter = 'blur(0.2rem)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
    }
})
//close menu
close_menu.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

//----------Scroll Indicator----------
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



//---------- BUTTON RIPPLE EFFECT USED IN HOME SECTION-----------
const homeBtn = document.querySelector('.home_action');
homeBtn.addEventListener('mouseenter', function (e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);
});

//--------------COUNTING SCRIPT USED IN ABOUT SECTION--------------
let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;
/* Creating a forech loop to set each retrieved 'valueDispley' to the initial value = 0
and the final value equal to that specified in 'data-value' (html), the initial value 
increments by one until it reaches the final value*/
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-value'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
//-----------CAROUSEL SCRIPT USED IN TESTIMONIAL SECTION-----------
let autoSlideIndex = 0;
automaticSlideShow();

function automaticSlideShow() {
    let i;
    let autoSlides = document.getElementsByClassName("testimonial_content");
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > autoSlides.length) { autoSlideIndex = 1 }
    autoSlides[autoSlideIndex - 1].style.display = "block";
    setTimeout(automaticSlideShow, 6000); // Change image every 2 seconds
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial_content");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//--- CAROUSEL SCRIPT USED IN TESTIMONIAL SECTION---