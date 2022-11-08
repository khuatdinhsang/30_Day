var currentIndex = 0;
let listImg = document.querySelectorAll('.image img');
let gallery = document.querySelector('.gallery');
let gallery_img = document.querySelector('.gallery img')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let btn = document.querySelector('.gallery i');
let play = document.querySelector('.play');
let stop = document.querySelector('.stop');
console.log(btn);

var s= "SAng dep trai";
 var s1= s.replace("dep","ngu");
 console.log(s1)
function show() {
    if (currentIndex == 0) {
        prev.classList.add('hide')

    } else {
        prev.classList.remove('hide')

    }
    if (currentIndex == listImg.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    gallery_img.src = listImg[currentIndex].src;
    gallery.classList.add('show');
}
listImg.forEach((item, index) => {
    item.onclick = () => {
        currentIndex = index;
        show();
    }
})
prev.onclick = () => {
    currentIndex--;
    show();
}
next.onclick = () => {
    currentIndex++;
    show();
}
btn.onclick = () => {
    gallery.classList.remove('show');
}
document.addEventListener('keydown', (e) => {
    if (e.which == 27) {
        gallery.classList.remove('show');

    }
})
var t;
play.onclick = () => {
    clearInterval(t);
    t = setInterval(() => {
        if (currentIndex == listImg.length - 1) {
            currentIndex = -1;

        }
        currentIndex++;
        show();

    }, 1000);
}
stop.onclick = () => {
    clearInterval(t);
}