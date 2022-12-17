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
const container = document.querySelector(".testimonial_box");
const cards = document.querySelector(".testimonial_wrapper");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
    isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards();
});

function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}
//--- CAROUSEL SCRIPT USED IN TESTIMONIAL SECTION---
