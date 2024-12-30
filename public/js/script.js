// creating animation Home-section

const beSpan = document.querySelector('#beSpan');
let ClansA = [
    ['Moles', '#5CB338'],
    ['Morem', '#DA498D'],
    ['Midas', '#FB4141'],
    ['Ubitya', '#3E5879'],
]
let counterW = 0;

setInterval(() =>{
    changeClanName()
}, 3000)


function changeClanName() {
    if (counterW == ClansA.length) {
        counterW = -1;
    }
    else {
        setTimeout(function() {
            beSpan.style.transform = 'translateY(-10px)';
            beSpan.style.opacity = '0';
        },200)
        setTimeout(function(){
            beSpan.innerText = ClansA[counterW][0];
            beSpan.style.color = ClansA[counterW][1];
            beSpan.style.transform = 'translateY(10px)'
        },500)
        setTimeout(function() {
            beSpan.style.opacity = '1';
            beSpan.style.transform = 'translateY(0)'
        },700)
        counterW++
    }
}

//appearing arrow to get top when we scroll
let togettopButton = document.querySelector('.tothetop');

window.addEventListener('scroll', () => {
    togettopButton.classList.toggle('active', window.scrollY > 300)
})

// burger menu
let menuBtn = document.querySelector('.bx-menu');
let Burgernavbar = document.querySelector('.burger-navbar')

menuBtn.addEventListener('click', function() {
    Burgernavbar.classList.toggle('bg-active');
})


// making sup menu
let liBtn = document.querySelector('.burger-li-with-supmenu');
let SupMenu = document.querySelector('.burger-sup-menu');
let arrow = document.querySelector('#arrow');

let counter = 0;

liBtn.addEventListener('click', function() {
    SupMenu.classList.toggle('getdown');
    if (counter == 0) {
        arrow.style.transform = 'rotate(90deg)'
        counter = 1;
    }
    else {
        arrow.style.transform = 'rotate(0)'
        counter = 0
    }
})