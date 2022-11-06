var h1 = document.querySelector('#home h1')
var animationElements = document.querySelectorAll('.show-on-scroll');
window.onscroll = function() {
    var recH1 = h1.getClientRects();
    var heighScreen = window.innerHeight;
    // check xem cai khoi nay co ben trong man hinh hay khong

    if (!(recH1.bottom < 0 || recH1.top > heighScreen)) {
        // trong thi vao day
        h1.classList.add('start');
    } else {
        // ngoai thi vao day
        h1.classList.remove('start');
    }
}